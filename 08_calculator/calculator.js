const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(e) {
	let sum = 0;
  e.forEach(el => sum += el);
  return sum;
};

const multiply = function(e) {
	return e.reduce((curr,prev) => curr * prev);

};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(e) {
  let fac = 1;
  if (e === 0 || e === 1){
    fac = 1;
  } else if ( e > 0){
    for (let i = 1; i <= e; i++){
      fac *= i;
    }
  }
  return fac
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