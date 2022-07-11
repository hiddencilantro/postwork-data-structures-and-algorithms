function findShortestString(arr) {
  // type your code here
  if (arr.length === 1) return arr[0];

  let shortest = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    };
  };
  return shortest;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
