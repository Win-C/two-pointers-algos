"use strict";

// Anagram Substrings
// Given two strings s0 and s1, return the number of substrings 
// where s1 contains any anagram of s0.

/** Function finds anagrams of s0 in s1
 *  Takes in two strings s0 and s1
 *  Returns the number of anagrams found
 * 
 *  Time complexity O(n + m) where n and m are the length of s0 and s1, 
 *  respectively
 */
function countAnagrams(s0, s1) {
  const patternFreq = {} // subStrMap for s0 pattern
  let windowStart = 0;
  let charMatched = 0;
  let numAnagrams = 0;

  if (s1.length < s0.length) return numAnagrams;

  for (let char of s0){
      patternFreq[char] = (patternFreq[char] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < s1.length; windowEnd++){
      const rightChar = s1[windowEnd];

      if (rightChar in patternFreq){
        patternFreq[rightChar]--;
        if (patternFreq[rightChar] === 0){
          charMatched++;
        }
      }

      if (charMatched === Object.keys(patternFreq).length){
        numAnagrams++;
      }

      if (windowEnd >= s0.length - 1){
        const leftChar = s1[windowStart];
        windowStart++;

        if (leftChar in patternFreq){
          if (patternFreq[leftChar] === 0){
            charMatched--;
          }
          patternFreq[leftChar]++;
        }
      }
  }
  return numAnagrams;
}

// Test Cases
const s0 = "abc";
const s1 = "bcabxabc";

console.log(countAnagrams(s0, s1));  // 3 with "bca", "cab" and "abc"
