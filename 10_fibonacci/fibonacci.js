const fibonacci = function(count) {
    if (count < 0) return'OOPS';
    if (count == 0) return 0;
    let fib1 = 1;
    let fib2 = 0;

    for (let i = 2; i <= count; i++){
        let cur = fib1 + fib2;
        fib2 = fib1;
        fib1 = cur;
        
    }
    return fib1

};

// Do not edit below this line
module.exports = fibonacci;
