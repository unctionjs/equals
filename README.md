# @unction/equals

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> mixed => mixed => boolean

Compares two values and attempts to discern if they are truly equal.

``` javascript
equals(true)(true) // true
equals([1, 2, 3])([1, 2, 3]) // true
equals({aaa: "aaa", bbb: "bbb"})({aaa: "aaa", bbb: "bbb"}) // true
equals("abc")("abc") // true
equals(null)(null) // true
equals(undefined)(undefined) // true
equals(false)(true) // false
equals([1, 2, 3])([3, 2, 1]) // false
equals([1, 2, 3])([1]) // false
equals([1, 2, 3])([]) // false
equals({aaa: "aaa", bbb: "bbb"})({aaa: "aaa"}) // false
equals({aaa: "aaa", bbb: "bbb"})({}) // false
equals({aaa: "aaa", bbb: "bbb"})({aaa: "bbb", bbb: "ccc"}) // false
equals("abc")("bac") // false
equals(null)(undefined) // false
equals(undefined)(null) // false
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/equals.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/equals.svg?maxAge=2592000&style=flat-square
