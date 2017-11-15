/*parameter an array of numbers, return second lowest and second greatest
separated by a space */

function SecondGreatLow(arr) {

arr.sort((a,b) => a - b);
var single = [];

//create array "single" that has duplicate numbers removed
for (var i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) == i) {
    single.push(arr[i]);
  }
}

//watch out for input arrays with only one number!
var len = single.length;
return len == 1 ? single[0] + " " + single[0] : single[1] + " " + single[len-2];

}
