const sumAll = function(start, end) {
    let finalSum = [];
    if (start > -1 && end > -1){
    let sum = [];
    
    if (start > end) {
            for (let i = end; i <= start; i++) {
                sum.push(i);
            }
        } else if (end > start) {
            for (let i = start; i <= end; i++) {
                sum.push(i);
            }

        }
        const sumT = sum.reduce((prev,curr) => prev + curr, 0)
        finalSum.push(sumT);
    }
       
    return finalSum
    

};




sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// Do not edit below this line
module.exports = sumAll;
