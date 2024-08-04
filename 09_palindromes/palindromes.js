const palindromes = function (string) {

    string = string.replace(/\W/g, '');
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++){
        if (string[i] != string[string.length - 1 - i]){
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
