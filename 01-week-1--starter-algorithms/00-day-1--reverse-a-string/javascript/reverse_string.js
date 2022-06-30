function reverseString(str) {
  const result = [];
  
  const arrOfChar = str.split("");
  arrOfChar.forEach(char => result.unshift(char));

  return result.join("");
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'ortnalicneddih'");
  console.log("=>", reverseString("hiddencilantro"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// -> create an empty array to push result
// -> split the string into an array of characters and store it in a variable
// -> map over it and unshift each item
// -> join the mapped array back into a string

// And a written explanation of your solution
// -> Split the input string into an array of characters 
// -> iterate through the array and unshift each item (add to beginning of array) into another array
// -> join the array with the characters in the correct order back to a string and return