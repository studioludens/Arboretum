/**
 * Created by rulkens on 12/03/15.
 */
/// <reference path="EnvironmentFactor.ts" />
var Environment;
(function (_Environment) {
    var Environment = (function () {
        function Environment(factors) {
            this.factors = factors;
            this.factors.map(function (f) { return f; });
        }
        return Environment;
    })();
    _Environment.Environment = Environment;
})(Environment || (Environment = {}));
//# sourceMappingURL=Environment.js.map