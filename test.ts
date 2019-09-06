/* eslint-disable no-magic-numbers, no-undefined */
import equals from "./index";

test("works", () => {
  expect(equals(true)(true)).toBeTruthy();
});

test("works", () => {
  expect(equals([1, 2, 3])([1, 2, 3])).toBeTruthy();
});

test("works", () => {
  expect(equals({
    aaa: "aaa",
    bbb: "bbb",
  })({
    aaa: "aaa",
    bbb: "bbb",
  })).toBeTruthy();
});

test("works", () => {
  expect(equals("abc")("abc")).toBeTruthy();
});

test("works", () => {
  expect(equals(null)(null)).toBeTruthy();
});

test("works", () => {
  expect(equals(undefined)(undefined)).toBeTruthy();
});

test("works", () => {
  expect(equals(false)(true)).toBeFalsy();
});

test("works", () => {
  expect(equals([1, 2, 3])([3, 2, 1])).toBeFalsy();
});

test("works", () => {
  expect(equals([1, 2, 3])([1])).toBeFalsy();
});

test("works", () => {
  expect(equals([1, 2, 3])([])).toBeFalsy();
});

test("works", () => {
  expect(equals({
    aaa: "aaa",
    bbb: "bbb",
  })({aaa: "aaa"})).toBeFalsy();
});

test("works", () => {
  expect(equals({
    aaa: "aaa",
    bbb: "bbb",
  })({})).toBeFalsy();
});

test("works", () => {
  expect(equals({
    aaa: "aaa",
    bbb: "bbb",
  })({
    aaa: "bbb",
    bbb: "ccc",
  })).toBeFalsy();
});

test("works", () => {
  expect(equals("abc")("bac")).toBeFalsy();
});

test("works", () => {
  expect(equals(null)(undefined)).toBeFalsy();
});

test("works", () => {
  expect(equals(undefined)(null)).toBeFalsy();
});
