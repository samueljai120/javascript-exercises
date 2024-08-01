const repeatString = function(string,num) {
    let myString = "";
    while (num > 0) {
        myString += string;
        num--;
    }
    return myString
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
