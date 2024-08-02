const sumAll = function(start, end) {
    let finalSum = [];
    for (let i = start; i <= end; i++) {
        finalSum.push(i);
    }
    return finalSum.reduce((prev,curr) => prev + curr, 0)

};




sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// Do not edit below this line
module.exports = sumAll;
