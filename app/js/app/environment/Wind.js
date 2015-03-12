/**
 * Created by rulkens on 12/03/15.
 */
/// <reference path="EnvironmentFactor.ts" />
var Environment;
(function (Environment) {
    var Wind = (function () {
        function Wind() {
        }
        Wind.prototype.tick = function () {
            console.log('[Wind].tick');
        };
        return Wind;
    })();
    Environment.Wind = Wind;
})(Environment || (Environment = {}));
//# sourceMappingURL=Wind.js.map