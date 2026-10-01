J$.iids = {"9":[1,11,1,12],"17":[1,11,1,12],"25":[1,11,1,12],"33":[2,23,2,24],"41":[2,23,2,24],"49":[2,16,2,25],"57":[2,1,2,27],"65":[2,1,2,27],"73":[3,1,3,2],"81":[3,1,3,4],"89":[3,1,3,5],"97":[1,1,4,1],"105":[1,1,4,1],"113":[2,1,2,27],"121":[1,1,4,1],"129":[2,1,2,27],"137":[2,1,2,27],"145":[1,1,4,1],"153":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/home/wise/thesis/tools/jalangi2/experiments/es6/const.js","instrumentedCodeFileName":"/home/wise/thesis/tools/jalangi2/experiments/es6/const_jalangi_.js","code":"const x = 1;\nfunction f() { return x; }\nf();\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(97, '/home/wise/thesis/tools/jalangi2/experiments/es6/const_jalangi_.js', '/home/wise/thesis/tools/jalangi2/experiments/es6/const.js');
            function f() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(57, arguments.callee, this, arguments);
                            arguments = J$.N(65, 'arguments', arguments, 4);
                            return J$.X1(49, J$.Rt(41, J$.R(33, 'x', x, 1)));
                        } catch (J$e) {
                            J$.Ex(129, J$e);
                        } finally {
                            if (J$.Fr(137))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(105, 'x', x, 0);
            f = J$.N(121, 'f', J$.T(113, f, 12, false, 57), 0);
            const x = J$.X1(25, J$.W(17, 'x', J$.T(9, 1, 22, false), x, 3));
            J$.X1(89, J$.F(81, J$.R(73, 'f', f, 1), 0)());
        } catch (J$e) {
            J$.Ex(145, J$e);
        } finally {
            if (J$.Sr(153)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
