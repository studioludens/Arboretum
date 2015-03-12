// describe an environment factor
var Environment;
(function (Environment) {
    var EnvironmentFactor = (function () {
        function EnvironmentFactor() {
        }
        EnvironmentFactor.prototype.init = function () {
            console.log('[EnvironmentFactor init]');
        };
        EnvironmentFactor.prototype.tick = function () {
            console.log('[EnvironmentFactor tick]');
        };
        return EnvironmentFactor;
    })();
    Environment.EnvironmentFactor = EnvironmentFactor;
})(Environment || (Environment = {}));
//# sourceMappingURL=EnvironmentFactor.js.map