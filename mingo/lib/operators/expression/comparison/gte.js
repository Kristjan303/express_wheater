"use strict";
// Comparison Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#comparison-expression-operators
Object.defineProperty(exports, "__esModule", { value: true });
exports.$gte = void 0;
var _predicates_1 = require("../../_predicates");
/**
 * 	Matches values that are greater than or equal to a specified value.
 */
exports.$gte = (0, _predicates_1.createExpressionOperator)(_predicates_1.$gte);
