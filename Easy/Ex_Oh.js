//take str parameter with xx's and oo's. Return true if number of x = number of o

function ExOh(str) {

var oStr = str.split("x").join("");
var xStr = str.split("o").join("");

//note empty array length can't be calculated but empty string length is 0
return oStr.length === xStr.length;

}
