function balancingParentheses(string) {
  // ***INITIAL ATTEMPT***
  // const arrayOfParantheses = string.split("");
  // let open = 0;
  // let close = 0;
  // arrayOfParantheses.forEach(element => element === "(" ? ++open : ++close);
  // return Math.abs(open - close);
  // ***DOESN'T WORK IF STRING STARTS WITH CLOSING PARANTHESIS OR ENDS WITH A CLOSING PARANTHESIS***

  let open = 0;
  let missing = 0;
  for (let i = 0; i < string.length; ++i) {
    if (string[i] === '(') {
      ++open;
      continue;
    };

    if (open > 0) {
      --open;
    } else {
      ++missing;
    };
  };
  return open + missing;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
