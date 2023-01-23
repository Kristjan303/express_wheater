"use strict";
// Arithmetic Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#arithmetic-expression-operators
Object.defineProperty(exports, "__esModule", { value: true });
exports.$floor = void 0;
var core_1 = require("../../../core");
var util_1 = require("../../../util");
/**
 * Returns the largest integer less than or equal to the specified number.
 *
 * @param obj
 * @param expr
 * @returns {number}
 */
function $floor(obj, expr, options) {
    var n = (0, core_1.computeValue)(obj, expr, null, options);
    if ((0, util_1.isNil)(n))
        return null;
    (0, util_1.assert)((0, util_1.isNumber)(n) || isNaN(n), "$floor expression must resolve to a number.");
    return Math.floor(n);
}
exports.$floor = $floor;