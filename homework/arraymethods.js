//1

function check(age) {
  if (age >= 65) {
    console.log("Special discount");
  } else {
    console.log("Not Allowed");
  }
}
check(66);

//2

function arr(num) {
  const newArr = num.map((n) => {
    return n * 100;
  });
  return newArr;
}

const inputArray = [1, 2, 3, 4];
const resultArray = arr(inputArray);
console.log(resultArray);
console.log(inputArray);

//3
/*
function arr(num) {
  if (num.length <= 5) {
    const newArr = num.map((n) => {
      return n * 100;
    });
    return newArr;
  }
}

const inputArray = [1, 2, 3, 4, 5];
const resultArray = arr(inputArray);
if (inputArray.length <= 5) {
  console.log(resultArray);
}
console.log(inputArray);
*/

//4
/*
function arr(num) {
    const newArr = num.map((n) => {
        if (n % 2 === 0) {
            return n * 100; // Multiply by 100 if even
        } else {
            return n; // Leave unchanged if odd
        }
    });

    return newArr;
}

const inputArray = [1, 2, 3, 4];
const resultArray = arr(inputArray);

console.log("Original Array:", inputArray);
console.log("Result Array:", resultArray);

*/

//5
/*
function arr(num, target) {
    const occurrences = num.reduce((count, n) => {
        if (n === target) {
            return count + 1;
        } else {
            return count;
        }
    }, 0);

    return occurrences;
}

const inputArray = [154, 657, 564, 561, 154, 678, 100, 154];
const targetNumber = 154;

const occurrences = arr(inputArray, targetNumber);

console.log(`Number of occurrences of ${targetNumber}: ${occurrences}`);

*/

//6
function checkType(input) {
  if (Array.isArray(input) || (typeof input === "object" && input !== null)) {
    return "object";
  } else {
    return "It’s something else";
  }
}
