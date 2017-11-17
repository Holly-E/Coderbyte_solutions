//parameter string. insert a dash between two odd numbers in string
//don't count zero as odd
function DashInsert(str) {

var arr = str.split("");
var arr2 = [];

for (var i = 0; i < arr.length; i++) {
    if ((arr[i] === 0) || (i == arr.length-1)) {
        arr2.push(arr[i]);
    }
    else if ((arr[i] % 2 !== 0) && (arr[i+1] % 2 !== 0)) {
        arr2.push(arr[i] + "-");
    } else {
        arr2.push(arr[i]);
    }
}
  return arr2.join("");


}
