import type from "@unction/type"
import isEnumerable from "@unction/isenumerable"
import isObject from "@unction/isobject"
import isArray from "@unction/isarray"
import length from "@unction/length"
import deepEql from "deep-eql"

import type {UnaryFunctionType} from "types"

export default function equals (left: mixed): UnaryFunctionType {
  return function equalsLeft (right: mixed): boolean {
    if (type(left) !== type(right)) {
      return false
    }

    if (isEnumerable(left) && isEnumerable(right) && length(left) !== length(right)) {
      return false
    }

    if (isObject(left) || isArray(left)) {
      return deepEql(left, right)
    }

    return left === right
  }
}
