//parameter string. Swap case of all letters

function SwapCase(str) {

  var arr = str.split("");
  var answer = [];

 for(var i = 0; i < arr.length; i++) {
     if (arr[i] === arr[i].toLowerCase()) {
         answer.push(arr[i].toUpperCase());
     } else if (arr[i] === arr[i].toUpperCase()) {
         answer.push(arr[i].toLowerCase());
     }
 }

 return answer.join("");

}
