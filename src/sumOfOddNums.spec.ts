import { sumOddNumbers } from "./sumOfOddNums";

describe("sumOddNumbers", () => {
  it("should return the sum of odd numbers in the array", () => {
    expect(sumOddNumbers([1, 2, 3, 4, 5])).toBe(9); /*  1 + 3 + 5 */
  });

  it("should return 0 if there are no odd numbers", () => {
    expect(sumOddNumbers([2, 4, 6, 8])).toBe(0);
  });

  it("should handle an empty array", () => {
    expect(sumOddNumbers([])).toBe(0);
  });

  it("should handle an array with only odd numbers", () => {
    expect(sumOddNumbers([7, 9, 11])).toBe(27); /* 7 + 9 + 11 */
  });

  it("should handle an array with only even numbers", () => {
    expect(sumOddNumbers([10, 20, 30])).toBe(0);
  });

  it("should handle mixed positive and negative numbers", () => {
    expect(sumOddNumbers([1, -3, 4, -5, 6])).toBe(-7); /* 1 + (-3) + (-5) */
  });
});
