/* eslint-disable no-magic-numbers, no-undefined */
import equals from "./index";

test(() => {
  expect(equals(true)(true)).toBeTruthy();
});

test(() => {
  expect(equals([1, 2, 3])([1, 2, 3])).toBeTruthy();
});

test(() => {
  expect(equals({
    aaa: "aaa",
    bbb: "bbb",
  })({
    aaa: "aaa",
    bbb: "bbb",
  })).toBeTruthy();
});

test(() => {
  expect(equals("abc")("abc")).toBeTruthy();
});

test(() => {
  expect(equals(null)(null)).toBeTruthy();
});

test(() => {
  expect(equals(undefined)(undefined)).toBeTruthy();
});

test(() => {
  expect(equals(false)(true)).toBeFalsy();
});

test(() => {
  expect(equals([1, 2, 3])([3, 2, 1])).toBeFalsy();
});

test(() => {
  expect(equals([1, 2, 3])([1])).toBeFalsy();
});

test(() => {
  expect(equals([1, 2, 3])([])).toBeFalsy();
});

test(() => {
  expect(equals({
    aaa: "aaa",
    bbb: "bbb",
  })({aaa: "aaa"})).toBeFalsy();
});

test(() => {
  expect(equals({
    aaa: "aaa",
    bbb: "bbb",
  })({})).toBeFalsy();
});

test(() => {
  expect(equals({
    aaa: "aaa",
    bbb: "bbb",
  })({
    aaa: "bbb",
    bbb: "ccc",
  })).toBeFalsy();
});

test(() => {
  expect(equals("abc")("bac")).toBeFalsy();
});

test(() => {
  expect(equals(null)(undefined)).toBeFalsy();
});

test(() => {
  expect(equals(undefined)(null)).toBeFalsy();
});
