/* The purpose of this file is to open a site with jalangi2 proxy by default
and record which functions ran on load and which after interaction(scrolling and clicks)

Execution with: node visit.js <url> <out.json> [--noproxy]
 */
const args = process.argv;
const url = args[2];
const outputFile = args[3];
const useProxy = !args.includes('--noproxy');

if(!url || !outputFile || url.startsWith('--') || outputFile.startsWith('--')) {
    console.error("Usage: node visit.js <url> <out.json> [--noproxy]");
    process.exit(1);
}

const chromium = require('playwright').chromium;
const fs = require('fs');
const MAX_SCROLLS = 100;
const MAX_CLICKS = 2;
const MAX_CANDIDATES = 50;   // how many buttons we examine at most

function measure(page) {
    return page.evaluate(() => typeof J$ !== 'undefined' ? J$.funcovReport() : null);
}

async function run() {
    let browser = null;
    let onLoad = null;
    let afterInteraction = null;
    let scrolls = 0;
    let reachedBottom = false;
    const clicks = [];
    let navigatedAway = false;
    let error = null;
    const errors = [];
    const jsResponses = [];
    try {
        browser = await chromium.launch({
            args: useProxy
                ?['--proxy-server=127.0.0.1:8080', '--proxy-bypass-list=<-loopback>']
                :[]
        });
        const ctx = await browser.newContext({ignoreHTTPSErrors: true, bypassCSP: true});
        const page = await ctx.newPage();
        page.on('pageerror', e => {
            console.error('[pageerror]', e.message);
            errors.push(e.message);
        });

        let pageNo = 0;
        page.on('framenavigated', f => {
            if (f === page.mainFrame()) pageNo ++;
        });

        page.on('response', r => {
            const type = r.headers()['content-type'] || '';
            if (type.includes('javascript')) {
                jsResponses.push({ url: r.url(), status: r.status(), pageNo });
            }
        });


        await page.goto(url, {waitUntil: 'load', timeout: 180_000});
        await page.waitForTimeout(3000);
        onLoad = await measure(page);

        // scrolling
        while (scrolls < MAX_SCROLLS) {
            await page.evaluate(() => window.scrollBy(0, window.innerHeight));
            await page.waitForTimeout(500);
            scrolls++;
            console.error(`scroll ${scrolls}/${MAX_SCROLLS}`);

            const atBottom = await page.evaluate(() =>
                window.scrollY + window.innerHeight >= document.body.scrollHeight
            );
            if (atBottom) {
                reachedBottom = true;
                break;
            }
        }

        // clicks
        const startUrl = page.url();
        const candidates = page.locator('button, [role="button"]');
        const count = Math.min(await candidates.count(), MAX_CANDIDATES);

        for (let i = 0; i < count && clicks.length < MAX_CLICKS; i++) {
            const el = candidates.nth(i);
            try {
                if (!(await el.isVisible())) continue;

                const text = (await el.innerText({ timeout: 1000 })).trim();
                const label = (text || await el.getAttribute('aria-label') || '(no label)').slice(0, 60);

                await el.click({ timeout: 2000 });
                await page.waitForTimeout(1000);
                clicks.push(label);
                console.error(`click ${clicks.length}/${MAX_CLICKS}: ${label}`);

                if (page.url() !== startUrl) {
                    navigatedAway = true;
                    break;
                }
            } catch (e) {
                // hidden, covered, detached or not clickable: skip it, try the next one
            }
        }

        // after a navigation the J$ of the original page is gone, so a measurement would be meaningless
        afterInteraction = navigatedAway ? null : await measure(page);


    }catch (e){
        error = e.message;
        console.error('[visit failed]', e.message);
    }finally {
        fs.writeFileSync(outputFile, JSON.stringify({
            url,
            proxy: useProxy,
            onLoad,
            afterInteraction,
            scrolls,
            reachedBottom,
            clicks,
            navigatedAway,
            jsResponses,
            errors,
            error
        }, null, 2));
        if(browser) await browser.close().catch(() => {});
    }

}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});