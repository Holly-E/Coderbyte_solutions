/*str parameter being passed will be two times
(each properly formatted with a colon and am or pm) separated by a hyphen
return the total number of minutes between the two times.
The time will be in a 12 hour clock format.
Sample:
Input:"12:30pm-12:00am"
Output:690
*/

function CountingMinutesI(str) {

//create array times storing am or pm in index 0 & 1
var time = str.match(/[apm]+/g);

//remove am pm and split times array of two strings
var arr = str.replace(/[amp]+/g, "").split("-");

//create function that will remove the : and split into array hour and array min
function sepColon (str) {
    return str.split(":");
}
arr = arr.map(sepColon);

//put in military time, accounting for 12 behaving differently
for (var i =0; i < arr.length; i++) {
    if ((time[i] === "pm") && (arr[i][0] !== "12")){
        arr[i][0] = Number(arr[i][0]) + 12;
    }
    if ((time[i] === "am") && (arr[i][0] === "12")){
        arr[i][0] = 0;
    }
    //convert hours to minutes
    arr[i][0] = Number(arr[i][0]) * 60;
    arr[i] = Number(arr[i][0]) + Number(arr[i][1]);
}

//add a 24 hours if the second time is smaller
if (arr[0] < arr[1]) {
    return arr[1] - arr[0];
} else {
    arr[1] = Number(arr[1]) + (24 * 60);
    return arr[1] - arr[0];
}


}
