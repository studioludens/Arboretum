/**
 * Created by rulkens on 12/03/15.
 */
/// <reference path="EnvironmentFactor.ts" />
var Environment;
(function (Environment) {
    var Air = (function () {
        function Air() {
        }
        Air.prototype.tick = function () {
            console.log('[Air].tick');
        };
        return Air;
    })();
    Environment.Air = Air;
})(Environment || (Environment = {}));
//# sourceMappingURL=Air.js.map