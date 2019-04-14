/* eslint-disable no-magic-numbers, no-undefined */
import {test} from "tap";

import equals from "./index";

test(({ok, end}) => {
  ok(
    equals(true)(true)
  );

  end();
});

test(({ok, end}) => {
  ok(
    equals([1, 2, 3])([1, 2, 3])
  );

  end();
});

test(({ok, end}) => {
  ok(
    equals({
      aaa: "aaa",
      bbb: "bbb",
    })({
      aaa: "aaa",
      bbb: "bbb",
    })
  );

  end();
});

test(({ok, end}) => {
  ok(
    equals("abc")("abc")
  );

  end();
});

test(({ok, end}) => {
  ok(
    equals(null)(null)
  );

  end();
});

test(({ok, end}) => {
  ok(
    equals(undefined)(undefined)
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals(false)(true)
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals([1, 2, 3])([3, 2, 1])
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals([1, 2, 3])([1])
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals([1, 2, 3])([])
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals({
      aaa: "aaa",
      bbb: "bbb",
    })({aaa: "aaa"})
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals({
      aaa: "aaa",
      bbb: "bbb",
    })({})
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals({
      aaa: "aaa",
      bbb: "bbb",
    })({
      aaa: "bbb",
      bbb: "ccc",
    })
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals("abc")("bac")
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals(null)(undefined)
  );

  end();
});

test(({notOk, end}) => {
  notOk(
    equals(undefined)(null)
  );

  end();
});
