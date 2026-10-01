/*
 * Copyright 2014 Samsung Information Systems America, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Author: Koushik Sen

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

/**
 * @file A template for writing a Jalangi 2 analysis
 * @author  Koushik Sen
 *
 */

(function (sandbox) {
    var executed = {};
    function MyAnalysis() {
        /**
         * This callback is called before the execution of a function body starts.
         *
         * @param {number} iid - Static unique instruction identifier of this callback
         * @param {function} f - The function object whose body is about to get executed
         * @param {*} dis - The value of the <tt>this</tt> variable in the function body
         * @param {Array} args - List of the arguments with which the function is called
         * @returns {undefined} - Any return value is ignored
         */
        this.functionEnter = function (iid, f, dis, args) {
            var id = sandbox.getGlobalIID(iid);
            if(!executed[id]){
                executed[id] = 1;
            }else{
                executed[id]++;
            }
        };
        /**
         * This callback is called when an execution terminates in node.js.  In a browser environment, the callback is
         * called if ChainedAnalyses.js or ChainedAnalysesNoCheck.js is used and Alt-Shift-T is pressed.
         *
         * @returns {undefined} - Any return value is ignored
         */
        this.endExecution = function () {
            Object.keys(executed).forEach(id => {
                console.log(sandbox.iidToLocation(id) + ' x' + executed[id]);
            })
        };

        sandbox.funcovReport = function () {
            var functions = {};
            var scripts = {};
            Object.keys(executed).forEach(id => {
                functions[sandbox.iidToLocation(id)] = executed[id];
            });
            Object.keys(sandbox.smap).forEach(sid => {
                var m = sandbox.smap[sid];
                scripts[sid] = {file: m.originalCodeFileName, code: m.code};
            });
            return {functions: functions, scripts: scripts};
        };
    }
    sandbox.analysis = new MyAnalysis();
})(J$);



