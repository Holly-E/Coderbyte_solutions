/*check if str parameter is a palindrome (same forwards and backwords)
return true or false*/

function Palindrome(str) {

 str = str.split(" ").join("").toLowerCase();
 var reverse = str.split("").reverse().join("");

 //can easily check if a string is equal but not an array
 return str === reverse;

}
