"use strict";
// Array Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#array-expression-operators
Object.defineProperty(exports, "__esModule", { value: true });
exports.$first = void 0;
var core_1 = require("../../../core");
var util_1 = require("../../../util");
var accumulator_1 = require("../../accumulator");
/**
 * Returns the first element in an array.
 *
 * @param  {Object} obj
 * @param  {*} expr
 * @return {*}
 */
function $first(obj, expr, options) {
    var copts = core_1.ComputeOptions.init(options);
    if (obj instanceof Array)
        return (0, accumulator_1.$first)(obj, expr, copts.update());
    var arr = (0, core_1.computeValue)(obj, expr, null, options);
    if ((0, util_1.isNil)(arr))
        return null;
    (0, util_1.assert)((0, util_1.isArray)(arr), "Must resolve to an array/null or missing");
    return (0, accumulator_1.$first)(arr, "$$this", options);
}
exports.$first = $first;
