//input array of numbers, return 1 if mean = mode, else return 0
//CAN ALSO USE HASH TABLE, see solution on coderbyte!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function MeanMode(arr) {

var mean = 0;
//MEAN calculate by adding all numbers and dividing by # of numbers (arr.length)
for (var i = 0; i < arr.length; i++) {
    mean += arr[i];
}
mean = mean / arr.length;

//MODE is the number which occurs most often
arr.sort();

//if arr[i+1] is a new number, add a space between the two
//limit length-1 so we don't have a space at the end
//add a comma between same numbers so we can split apart later
for (var j = 0; j < arr.length-1; j++) {
    if (arr[j] !== arr[j+1]) {
        arr[j] = arr[j] + " ";
    }  else {
      arr[j] = arr[j] + ",";
    }
}

//create a new arr of bunches of the same number
var modeArr = arr.join("").split(" ");

//sort by length, longest is the string containing mode!
//don't forget to return the value
function moded(a,b) {
   return b.length - a.length;
}

modeArr.sort(moded);

//split the longest string to an array to get the number
modeArr = modeArr[0].split(",");

 //use Number wrapper to explicitely coerce the string "int" to number
var mode = Number(modeArr[0]);

return (mode === mean) ? 1: 0;
}
