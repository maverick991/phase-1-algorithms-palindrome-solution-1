function reverse(word){
  //'abc' => 'cba'
  //const wordArray = word.split("")
  //const reversedWordArray = wordArray.reverse()
  //const reversedWord = reversedWordArray.join("");
  //return reversedWord;

  return word.split("").reverse().join("");

}



function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string
  const reversedWord = reverse(word)
  //if input is the same as the reversed input
  return word === reversedWord;
  //return true
  //else
  //return false
}

/* 
  Add your pseudocode here
  mom === mom //true
  dad === dad //true
  jump === pmuj //false
  look === kool //false

  make a function that returns true if word is palindrome
  and false if not.
  word is the same in reverse.. then true
  
  reverse the input string
  if input is the same as the reversed input
  return true
  else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("watch"))
}

module.exports = isPalindrome;
