//check if the letters in a string are surrounded on each side by a + symbol
// return true if they are or false if not

function SimpleSymbols(str) {

//pad string so check characters before and after won't return out of bounds
str = "-" + str + "-";

for (var i = 0; i < str.length; i++) {

    // check to see if current character is an alphabetic character
    // by using a case-insensitive regex pattern
    if (str[i].match(/[a-z]/i) !== null) {

        if (str[i-1] !== "+" || str[i+1] !== "+") {

            return false;
        }
    }
}
  return true;

}
