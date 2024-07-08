import { describe, expect, test } from "@jest/globals";
import { sum, multiply } from "../index";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("add 5 + 5 to equal 10", () => {
    expect(sum(5, 5)).toBe(10);
  });
});

describe("multiply module", () => {
  test("multiply 5 * 2 to equal 10", () => {
    expect(multiply(5, 2)).toBe(10);
  });
});

