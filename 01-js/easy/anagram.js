/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function sortStringAlphabetically(str) {
  // Convert the string to lowercase and remove spaces
  var sanitizedStr = str.toLowerCase().replace(/ /g, '');
  
  // Convert the string into an array of characters
  var chars = sanitizedStr.split('');
  
  // Sort the array alphabetically
  chars.sort(function(a, b) {
    return a.localeCompare(b);
  });
  
  // Join the sorted array back into a string
  var sortedStr = chars.join('');
  
  return sortedStr;
}
function isAnagram(str1, str2) {
  if(
  sortStringAlphabetically(str1) == sortStringAlphabetically(str2)){
    return true;
  }
  return false;
}
console.log(isAnagram("spar","rasp"));

module.exports = isAnagram;
