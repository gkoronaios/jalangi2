J$.iids = {"9":[1,13,1,14],"10":[1,29,1,34],"17":[1,13,1,14],"25":[1,16,1,17],"33":[1,16,1,17],"41":[1,29,1,30],"49":[1,33,1,34],"57":[1,29,1,34],"65":[1,22,1,35],"73":[1,1,1,37],"81":[1,1,1,37],"89":[1,1,1,37],"97":[2,1,2,2],"105":[2,7,2,8],"113":[2,13,2,14],"121":[2,3,2,15],"129":[2,1,2,16],"137":[2,1,2,17],"145":[1,1,3,1],"153":[1,1,1,37],"161":[1,1,3,1],"169":[1,1,1,37],"177":[1,1,1,37],"185":[1,1,3,1],"193":[1,1,3,1],"nBranches":0,"originalCodeFileName":"/home/wise/thesis/tools/jalangi2/experiments/es6/destructuring.js","instrumentedCodeFileName":"/home/wise/thesis/tools/jalangi2/experiments/es6/destructuring_jalangi_.js","code":"function f({a, b}) { return a + b; }\nf({a: 1, b: 2});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(145, '/home/wise/thesis/tools/jalangi2/experiments/es6/destructuring_jalangi_.js', '/home/wise/thesis/tools/jalangi2/experiments/es6/destructuring.js');
            function f({J$.R(9, 'a', a, 2), J$.R(25, 'b', b, 2)}) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            undefined = J$.N(89, 'undefined', undefined, 4);
                            return J$.X1(65, J$.Rt(57, J$.B(10, '+', J$.R(41, 'a', a, 2), J$.R(49, 'b', b, 2), 0)));
                        } catch (J$e) {
                            J$.Ex(169, J$e);
                        } finally {
                            if (J$.Fr(177))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            f = J$.N(161, 'f', J$.T(153, f, 12, false, 73), 0);
            J$.X1(137, J$.F(129, J$.R(97, 'f', f, 1), 0)(J$.T(121, {
                a: J$.T(105, 1, 22, false),
                b: J$.T(113, 2, 22, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(185, J$e);
        } finally {
            if (J$.Sr(193)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
