"use strict";

// Given an array of unsorted numbers, find all unique triplets in it
// that add up to zero.

/** Function finds and returns triplets that sum to zero
 *  Takes in an unsorted array of integers
 *  Return an array of triplets that sum to zero
 * 
 *  Time complexity of O(n^2) where n is the length of the array
 *  Space complexity of O(n) where n is the length of the array due to sorting
 */
function findTriplets(arr) {
  let triplets = [];

  if (arr.length < 3) return triplets;

  arr.sort((a, b) => (a - b));

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    findPair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

/** Helper function to find pairs in the triplet */
function findPair(arr, targetSum, left, triplets) {
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left++;
      right--;

      while (left < right && arr[left] === arr[left - 1]) {
        left++;
      }

      while (left < right && arr[right] === arr[right + 1]) {
        right--;
      }

    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
}

// Test Cases
const example1 = [-3, 0, 1, 2, -1, 1, -2];
const example2 = [-5, 2, -1, -2, 3];

console.log(findTriplets(example1));  // [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
console.assert(findTriplets(example2));  // [[-5, 2, 3], [-2, -1, 3]]