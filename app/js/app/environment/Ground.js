/**
 * Created by rulkens on 12/03/15.
 */
/// <reference path="EnvironmentFactor.ts" />
var Environment;
(function (Environment) {
    var Ground = (function () {
        function Ground() {
        }
        Ground.prototype.tick = function () {
            console.log('[Ground].tick');
        };
        return Ground;
    })();
    Environment.Ground = Ground;
})(Environment || (Environment = {}));
//# sourceMappingURL=Ground.js.map