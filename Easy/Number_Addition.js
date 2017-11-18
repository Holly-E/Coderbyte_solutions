//input a str with numbers, letters and special characters
//return all the numbers added up, note two or more consecutive # is 55, not 5+5
function NumberAddition(str) {

//remove any non numbers, leave a gap between to distinguish sets of numbers
var n = str.replace(/[^0-9]/g, " ");

//create array, note any nonnumbers will show up in array as "". ex. [,,1,,21,]
var arr = n.split(" ");
var filtered = [];
var answer = 0;

//remove empty strings
for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
        filtered.push(arr[i]);
    }
}
//!!!All of the above can be achieved by the following!!!
//str.match returns an array with patterns it finds
//the + sign means include more than one digit together as a single pattern
// || [0] means if no matches are found, better = [0]
var better = str.match(/[0-9]+/g)|| [0];

//add the numbers in the array. Note they are strings and must be explicitely coerced
for (var y = 0; y < better.length; y++) {
    answer += Number(better[y]);
}

return answer;
}
