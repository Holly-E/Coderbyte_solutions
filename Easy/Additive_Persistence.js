// Parameter of positive integer.
// Return the additive persistence, which is the # of times you must add the digits until you reach a single digit

function AdditivePersistence(num) {

 var arr = num.toString().split("");
 var count = 0;

 //helper function to be used during reduce method
 function breakDown(accumulator, currentValue){
    return Number(accumulator) + Number(currentValue);
  }
  
  while (arr.length > 1) {
    arr = arr.reduce(breakDown);
    arr = arr.toString().split("");
    count += 1;
  }

  return count;

}
