const removeFromArray = function(array, ...target) {
   return array.filter(val => !target.includes(val))
};


removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
