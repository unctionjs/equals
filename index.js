/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-extra-parens */
import type from "@unction/type"
import isIterable from "@unction/isfunctor"
import isObject from "@unction/isobject"
import isArray from "@unction/isarray"
import length from "@unction/length"
import deepEql from "deep-eql"

export default function equals (left: mixed): Function {
  return function equalsLeft (right: mixed): boolean {
    if (type(left) !== type(right)) {
      return false
    }

    if (isIterable(left) && isIterable(right) && length(left) !== length(right)) {
      return false
    }

    if (isObject(left)) {
      return deepEql(left, right)
    }

    if (isArray(left)) {
      return deepEql(left, right)
    }

    return left === right
  }
}
