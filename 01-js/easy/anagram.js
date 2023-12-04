/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  

  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  if(cleanStr1.length != cleanStr2.length) return false;

  const frequency1 = {};
  const frequency2 = {};

  // Count the frequency of characters in the second string
  for (let char of cleanStr1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }

  // Count the frequency of characters in the second string
  for (let char of cleanStr2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }

  // Compare the character frequencies
  for (let char in frequency1) {
    if (frequency1[char] !== frequency2[char]) {
      return false;
    }
  }

  return true;

}

module.exports = isAnagram;
