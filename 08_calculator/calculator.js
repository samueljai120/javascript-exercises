const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((prev,curr) => prev + curr, 0)
};

const multiply = function(array) {
  return array.reduce((prev,curr) => (prev * curr))
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
  if (num >= 0 && num <= 1){
    return 1;
  } else {
    return num * factorial(num-1);
  }
	// let factorial = [];
  // while(num > 0){
  //   factorial.push(num);
  //   num--;
  // }
  // // for (let i = num, i > 0; i--){
  // //   factorial.push(i);
  // // }
  // return multiply(factorial)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
