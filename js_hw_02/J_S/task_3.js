"use strict"

const findLongestWord = function (string) {
  let wordInString = string.split(" ");
  let longestWord = " ";

  for (const words of wordInString) {
    if (words.length > longestWord.length) {
      longestWord = words;
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'