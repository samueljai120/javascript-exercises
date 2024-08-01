const reverseString = function(greet) {
    const str = greet.split('').reverse();
    return str.join('')

};

reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;
