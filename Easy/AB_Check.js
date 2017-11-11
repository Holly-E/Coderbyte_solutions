/* take str parameter, if characters a and b are separated by 3 characters
anywhere in the str then return true */

function ABCheck(str) {
var check = false;

for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' && str[i+4] === 'b') {
        check = true;
    } else if (str[i] === 'b' && str [i+4] === 'a') {
        check = true;
    }
}
  // code goes here
  return check;

}
