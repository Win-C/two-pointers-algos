"use strict";

// Given an array of unsorted numbers and a target sum, count all
// triplets in it such that the sum is less than the target. Triplet
// values must be distinct. Function returns the count of the number 
// of triplets found. 

/** Function counts the number of triplets that sum below the target
 *  Takes in an unsorted array and target sum
 *  Returns the count of distinct triplets found
 * 
 *  Time complexity of O(n^2) where n is the length of the array
 */
function findTriplets(arr, target) {
  let count = 0;

  arr.sort((a, b) => (a - b));

  for (let i = 0; i < arr.length; i++) {
    count += findPair(arr, target - arr[i], i + 1);
  }

  return count;
}

/** Helper function to find pairs */
function findPair(arr, targetDiff, left) {
  let count = 0;
  let right = arr.length - 1;
  while (left < right) {
    // Triplet found - any values between left and right will be < targetDiff
    if (arr[left] + arr[right] < targetDiff) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}

// Test Cases
const arr1 = [-1, 0, 2, 3];
const arr2 = [-1, 4, 2, 1, 3];
const target1 = 3;
const target2 = 5;

console.log(findTriplets(arr1, target1)); // 2 with triplets of [-1, 0, 3], [-1, 0, 2]
console.log(findTriplets(arr2, target2)); // 4 with triplets of [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]