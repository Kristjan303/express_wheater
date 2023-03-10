import { Options } from "../../../core";
import { AnyVal, RawObject } from "../../../types";
interface InputExpr {
    n: AnyVal;
    input: AnyVal;
}
/**
 * Returns a specified number of elements from the beginning of an array.
 *
 * @param  {Object} obj
 * @param  {*} expr
 * @return {*}
 */
export declare function $firstN(obj: RawObject, expr: InputExpr, options?: Options): AnyVal;
export {};
