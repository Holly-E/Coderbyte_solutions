//input a number, return time it converts to in format hour:minute

function TimeConvert(num) {

var hour = Math.floor(num / 60);
var min = Math.floor(num % 60);

  return hour + ":" + min;

}
