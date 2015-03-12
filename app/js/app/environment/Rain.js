/**
 * Created by rulkens on 12/03/15.
 */
/// <reference path="EnvironmentFactor.ts" />
var Environment;
(function (Environment) {
    var Rain = (function () {
        function Rain() {
        }
        Rain.prototype.tick = function () {
            console.log('[Rain].tick');
        };
        return Rain;
    })();
    Environment.Rain = Rain;
})(Environment || (Environment = {}));
//# sourceMappingURL=Rain.js.map