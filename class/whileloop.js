// function isPalindrome(array) {
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     if (array[left] == array[right]) {
//       return true;
//     }
//     left++;
//     right--;
//   }

//   return false;
// }

// console.log(isPalindrome([1, 2, 3, 4, 5, 6]));
// console.log(isPalindrome([1, 2, 3, 3, 2, 1]));

function find(c) {
  for (let a = 0; a < 1000; a++)
    for (let b = 0; b < 1000; b++) c = a ^ (2 + b) ^ 2;

  return [];
}
