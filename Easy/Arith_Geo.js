/*parameter is an array of numbers
return whether the pattern of numbers are arithmetic, geometric or -1 for neither
Note: Arithmetic means difference between all numbers is the same,
Geometric means the difference between each number after the first is multiplied
by some common constant */

function ArithGeo(arr) {

var arithmetic = arr[1] - arr[0];
var geometry = arr[1]  / arr[0];
var a = true;
var b = true;

for (var i = 0; i < arr.length-1; i++) {
    if ((arr[i+1] - arr[i]) !== arithmetic) {
        a = false;
    }
    if ((arr[i+1] / arr[i]) !== geometry) {
        b = false;
    }

}


return (a) ? "Arithmetic" : (b) ? "Geometric" : "-1";
}
