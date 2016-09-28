//MINIMUM
//Function that akes two args. and returns the minimum.

var min = function (value1, value2) {
  if (value1 <= value2) {
    return value1;
  }
  else {
    return value2;
  }
}
console.log(min(0, 10));
console.log(min(0, -10));



//RECURSION
//Define a recursive function to check if Even or Odd using 1. Zero is even 2. 1 is odd 3. for any other number N, its evenness is same as N-2. Function should accept a number parameter and return a boolean.

function isEven(number) {
  if (number < 0) {
    return isEven (number * -1); // HANDLE NEGATIVE INPUT
  }
  else if (number === 0) {
    return true;
  }
  else if (number === 1) {
    return false;
  }
  else {
    return isEven(number-2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
//console.log(isEven(-6));



//BEAN COUNTING
//Write a function countBs, takes a string as arg. and returns a number (of how many uppercase "B" chars) (Commented out to prevent clash with last part of problem).

/*function countBs(string) {
  var count = 0
  for (var i = 0; i < string.length; i++) {
//problem suggests should be i < (string.length-1); however this misses the last char -- because I start at i = 0 ie; the first position of the string?
    if (string[i] === "B") {
      count += 1;
    }
  }
  return count;
}
console.log(countBs("BBC"))
console.log(countBs("Big Bastard BakeryB")) */


//Write a function countChar that takes two args; a string and the character to be counted

function countChar(string, char) {
  var count = 0
  for (var i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count += 1;
    }
  }
  return count;
}
console.log(countChar("kakkerlak", "k"));

//Rewrite countBs so it uses countChar.

function countBs(string) {
  return countChar(string, "B");
}
console.log(countBs("BBC"))
//console.log(countBs("Big Bastard BakeryB"))
