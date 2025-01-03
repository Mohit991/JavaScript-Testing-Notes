// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers){
  if(numbers.length === 0) return NaN;
  let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum / numbers.length;
}

export const findFactorial = (n) => {
  if (n === 0) return 1;
  return n * findFactorial(n - 1);
}