J$.iids = {"8":[16,17,16,22],"9":[2,5,2,12],"10":[7,17,7,38],"17":[2,17,2,47],"18":[7,17,7,49],"25":[2,5,2,48],"26":[16,17,16,22],"27":[2,5,2,16],"33":[2,5,2,49],"34":[16,24,16,27],"41":[1,1,3,2],"49":[1,1,3,2],"50":[16,24,16,27],"57":[5,9,5,11],"65":[5,9,5,11],"73":[5,9,5,11],"81":[7,5,7,12],"89":[7,17,7,34],"97":[7,37,7,38],"105":[7,41,7,49],"113":[7,5,7,50],"115":[7,5,7,16],"121":[7,5,7,51],"129":[6,1,8,2],"137":[6,1,8,2],"145":[6,1,8,2],"153":[11,5,11,12],"161":[11,17,11,37],"169":[11,5,11,38],"171":[11,5,11,16],"177":[11,5,11,39],"185":[10,1,12,2],"193":[10,1,12,2],"201":[14,1,14,8],"209":[14,1,14,10],"217":[14,1,14,11],"225":[16,14,16,15],"233":[16,14,16,15],"241":[16,14,16,15],"249":[16,17,16,18],"257":[16,21,16,22],"273":[16,24,16,25],"281":[16,24,16,27],"297":[17,5,17,13],"305":[17,14,17,15],"313":[17,5,17,16],"321":[17,5,17,17],"329":[1,1,18,2],"337":[1,1,3,2],"345":[1,1,18,2],"353":[1,1,18,2],"361":[6,1,8,2],"369":[1,1,18,2],"377":[10,1,12,2],"385":[1,1,18,2],"393":[1,1,18,2],"401":[1,1,3,2],"409":[1,1,3,2],"417":[6,1,8,2],"425":[6,1,8,2],"433":[10,1,12,2],"441":[10,1,12,2],"449":[16,1,18,2],"457":[16,1,18,2],"465":[1,1,18,2],"473":[1,1,18,2],"nBranches":2,"originalCodeFileName":"/home/wise/thesis/tools/jalangi2/experiments/example.js","instrumentedCodeFileName":"/home/wise/thesis/tools/jalangi2/experiments/example_jalangi_.js","code":"function oneTime(){\n    console.log(\"I will execute one time only\");\n}\n\nvar t = 10;\nfunction multTime(t){\n    console.log(\"I will execute \" + t + \" times\");\n}\n\nfunction zeroTime(){\n    console.log(\"I will not execute\");\n}\n\noneTime();\n\nfor (var k = 0; k < t; k++){\n    multTime(t);\n}"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(329, '/home/wise/thesis/tools/jalangi2/experiments/example_jalangi_.js', '/home/wise/thesis/tools/jalangi2/experiments/example.js');
            function oneTime() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(41, arguments.callee, this, arguments);
                            arguments = J$.N(49, 'arguments', arguments, 4);
                            J$.X1(33, J$.M(25, J$.R(9, 'console', console, 2), 'log', 0)(J$.T(17, "I will execute one time only", 21, false)));
                        } catch (J$e) {
                            J$.Ex(401, J$e);
                        } finally {
                            if (J$.Fr(409))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function multTime(t) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            t = J$.N(145, 't', t, 4);
                            J$.X1(121, J$.M(113, J$.R(81, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.B(10, '+', J$.T(89, "I will execute ", 21, false), J$.R(97, 't', t, 0), 0), J$.T(105, " times", 21, false), 0)));
                        } catch (J$e) {
                            J$.Ex(417, J$e);
                        } finally {
                            if (J$.Fr(425))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function zeroTime() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(185, arguments.callee, this, arguments);
                            arguments = J$.N(193, 'arguments', arguments, 4);
                            J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, "I will not execute", 21, false)));
                        } catch (J$e) {
                            J$.Ex(433, J$e);
                        } finally {
                            if (J$.Fr(441))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            oneTime = J$.N(345, 'oneTime', J$.T(337, oneTime, 12, false, 41), 0);
            J$.N(353, 't', t, 0);
            multTime = J$.N(369, 'multTime', J$.T(361, multTime, 12, false, 129), 0);
            zeroTime = J$.N(385, 'zeroTime', J$.T(377, zeroTime, 12, false, 185), 0);
            J$.N(393, 'k', k, 0);
            var t = J$.X1(73, J$.W(65, 't', J$.T(57, 10, 22, false), t, 3));
            J$.X1(217, J$.F(209, J$.R(201, 'oneTime', oneTime, 1), 0)());
            for (var k = J$.X1(241, J$.W(233, 'k', J$.T(225, 0, 22, false), k, 3)); J$.X1(449, J$.C(8, J$.B(26, '<', J$.R(249, 'k', k, 1), J$.R(257, 't', t, 1), 0))); J$.X1(457, J$.B(50, '-', k = J$.W(281, 'k', J$.B(42, '+', J$.U(34, '+', J$.R(273, 'k', k, 1)), J$.T(265, 1, 22, false), 0), k, 2), J$.T(289, 1, 22, false), 0))) {
                J$.X1(321, J$.F(313, J$.R(297, 'multTime', multTime, 1), 0)(J$.R(305, 't', t, 1)));
            }
        } catch (J$e) {
            J$.Ex(465, J$e);
        } finally {
            if (J$.Sr(473)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
