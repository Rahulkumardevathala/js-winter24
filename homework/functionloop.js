//1

function calculateFactorial(n) {
  if (n < 0) {
    return "Invalid input";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
const factorialOf5 = calculateFactorial(5);
console.log(factorialOf5);

//2

function sum(array) {
  let result = 0;

  let i = 0;
  while (i < array.length) {
    const element = array[i];
    result = result + element;
    i++;
  }

  return result;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//3

function printReverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    console.log(element);
  }
}

printReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//4

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const inputString = "hello world";
const result = countVowels(inputString);
console.log(result);
