/**
 * The `describe` function is used to group related tests together. 
 * It helps in organizing tests and making the test output more readable.
 * 
 * @function
 * @name describe
 * @param {string} name - The name of the test suite.
 * @param {function} fn - The function containing the test cases.
 */

/**
 * The `test` function is used to define a single test case. 
 * It is an alias for the `it` function.
 * 
 * @function
 * @name test
 * @param {string} name - The name of the test case.
 * @param {function} fn - The function containing the test logic.
 */

/**
 * The `it` function is used to define a single test case. 
 * It is an alias for the `test` function.
 * 
 * @function
 * @name it
 * @param {string} name - The name of the test case.
 * @param {function} fn - The function containing the test logic.
 */

// test and it are exactly the same. Use anyone. 
// test is more readable and more popular.

import { describe, test, it, expect } from "vitest"
import { calculateAverage, findFactorial, fizzBuzz, max } from "../src/intro"

// Grouping related tests together under the 'max' test suite
describe('max', () => {
    // Defining a single test case within the 'max' test suite
    test('should return the first argument if it is greater', () => {
        // AAA pattern: Arrange, Act, Assert
        // Arrange: Set up the conditions for the test
        const a = 2
        const b = 1

        // Act: Execute the code being tested
        const result = max(a, b)

        // Assert: Verify that the code behaves as expected
        expect(result).toBe(a)

        // You can also use the following assertion
        // expect(max(2,1)).toBe(2)
    })

    // Defining another test case within the 'max' test suite
    test('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2)
    })

    test('should return the first argument if both arguments are equal', () => {
        expect(max(2, 2)).toBe(2)
    })
})

describe('fizzbuzz', () => {
    it('should return FizzBuzz if the number is divisible by 3 and 5', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    })
    it('should return Fizz if the number is divisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })
    it('should return Buzz if the number is divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })
    it('should return the number as a string if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(7)).toBe('7')
    })
})

describe('calculateAverage', () => {
    it('should return NaN if the input is an empty array', () => {
        expect(calculateAverage([])).toBeNaN()
    })
    it('should calculate the average of an array with a single number', () => {
        expect(calculateAverage([5])).toBe(5)
    })
    it('should calculate the average of an array with multiple numbers', () => {
        expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3)
    })
})

describe('findFactorial', () => {
    it('should return 1 if the input is 0', () => {
        expect(findFactorial(0)).toBe(1)
    })
    it('should return 1 if the input is 1', () => {
        expect(findFactorial(1)).toBe(1)
    })
    it('should calculate the factorial of a positive integer', () => {
        expect(findFactorial(5)).toBe(120)
    })
})