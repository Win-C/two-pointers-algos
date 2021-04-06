"use strict";

// Given an array of unsorted numbers and a target number, find a
// triplet in the array whose sum is as close to the target number
// as possible, return the sum of the triplet. If there are more 
// than one such triplet, return the sum of the triplet with the
// smallest sum

/** Function finds triplets that sum closest to a target amount
 *  Takes in an unsorted array of integers and a target sum
 *  Returns the sum of the triplet found
 */
function findTriplets(arr, target) {
  let minDiff = Infinity;

  arr.sort((a, b) => (a - b));

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currDiff = target - arr[i] - arr[left] - arr[right];

      if (currDiff === 0) return target;

      if (Math.abs(currDiff) < Math.abs(minDiff) ||
        Math.abs(currDiff) === Math.abs(minDiff) && currDiff > minDiff) {
        minDiff = currDiff;
      }

      if (currDiff > 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return target - minDiff;
}

// Test Cases
const arr1 = [-2, 0, 1, 2];
const arr2 = [-3, -1, 1, 2];
const arr3 = [1, 0, 1, 1];
const target1 = 2;
const target2 = 1;
const target3 = 100;

console.log(findTriplets(arr1, target1)); // 1 with triplet of [-2, 1, 2]
console.log(findTriplets(arr2, target2)); // 0 with triplet of [-3, 1, 2]
console.log(findTriplets(arr3, target3)); // 3 with triplet of [1, 1, 1]