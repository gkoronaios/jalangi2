function onLoad() { $('#title').text('Welcome'); }
function onClick() { $('#out').text(stamp()); }
function stamp() { return new Date().toISOString(); }
function never() { return 42; }
$(function () {
    onLoad();
    $('#btn').on('click', onClick);
});