/**
 * Created by rulkens on 12/03/15.
 */
/// <reference path="EnvironmentFactor.ts" />
var Environment;
(function (Environment) {
    var Sun = (function () {
        function Sun() {
        }
        Sun.prototype.tick = function () {
            console.log('[Sun].tick');
        };
        return Sun;
    })();
    Environment.Sun = Sun;
})(Environment || (Environment = {}));
//# sourceMappingURL=Sun.js.map