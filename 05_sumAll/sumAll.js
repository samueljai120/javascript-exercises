const sumAll = function(start,end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return `ERROR`;
    if (start < 0 || end < 0) return `ERROR`;
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }
    let finalSum = 0;
    for (let i = start; i <= end; i++){
        finalSum += i;
    }
    return finalSum
}

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// Do not edit below this line
module.exports = sumAll;