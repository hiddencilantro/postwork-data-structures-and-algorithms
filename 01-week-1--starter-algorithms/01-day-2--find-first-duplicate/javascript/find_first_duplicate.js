function findFirstDuplicate(arr) {
  const uniq = new Set();

  for (const value of arr) {
    if (uniq.has(value)) return value;
    uniq.add(value);
  };

  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 8");
  console.log("=>", findFirstDuplicate([5, 6, 8, 10, 9, 8, 13, 14, 14]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([24, 28, 36]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// 1. declare a variable and assign it to a an instance of a new Set
// 2. iterate through the array, checking to see if each value exists in the Set
// 3. if it does, return the value, otherwise add it to the Set
// 4. return -1 from outmost scope

// And a written explanation of your solution
// A Set object lets you store unique values (a value can only occur once in the collection)
// Using this characteristic, we iterate through the array, check if the value exists and add it to the collection if it doesn't.