/**
 * Created by rulkens on 12/03/15.
 */
var Utils;
(function (Utils) {
    function log() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log.apply(this, args);
    }
    Utils.log = log;
})(Utils || (Utils = {}));
//# sourceMappingURL=Logger.js.map