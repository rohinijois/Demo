/**
 * Function to sum all odd numbers in a collection.
 * @param numbers - Array of numbers.
 * @returns The sum of odd numbers.
 */
export function sumOddNumbers(numbers: number[]): number {
  return numbers
    .filter((num) => num % 2 !== 0) // Filter odd numbers
    .reduce((sum, num) => sum + num, 0); // Sum up the odd numbers
}
