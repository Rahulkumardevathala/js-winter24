/* 1
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log("Maximum value in the array is: " + max);
}

findMax([1, 2, 3, 4]);
*/
/*
//2

function isPalindrome(str){

    let n,i
    str%2== n
}function isPalindrome(str) {
    let n = str.length;
    let isPalindrome = true;

    for (let i = 0; i < n / 2; i++) {
        if (str[i] !== str[n - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    console.log("Is palindrome: " + isPalindrome);
}

isPalindrome("racecars");
*/

//3

/*
function countCharacters(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

// Example usage:
let str = "rahul kumar";
let char = "r";
let result = countCharacters(str, char);

console.log(`The character "${char}" appears ${result} times in the string "${str}".`);
*/

//4

/*
function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let element of arr) {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    }

    return uniqueArray;
}

let inputArray = [1, 2, 3, 4, 2, 3, 5, 6, 5, 3, 4];
let resultArray = removeDuplicates(inputArray);

console.log("Array with Duplicates Removed:", resultArray);

*/

//5

/*
function toTitleCase(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }

    return words.join(" ");
}

// Example usage:
let inputString = "hello world";
let titleCaseString = toTitleCase(inputString);

console.log("Original String:", inputString);
console.log("Title Case String:", titleCaseString);
*/

//6

/*
function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = concatArrays(array1, array2);

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Concatenated Array:", concatenatedArray);

*/

//7

/*
function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

// Example usage:
let inputSentence = "My name is rahuk kumar devathala";
let result = longestWord(inputSentence);

console.log("Input Sentence:", inputSentence);
console.log("Longest Word:", result);
*/

//8

function reverseArray(arr) {
  let reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

let inputArray = [1, 2, 3, 4, 5];
let reversedResult = reverseArray(inputArray);

console.log("Original Array:", inputArray);
console.log("Reversed Array:", reversedResult);
