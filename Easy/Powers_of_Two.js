// take parameter integer and return true if it's a power of 2.
// POWERS of y are 1 * y = power * y = power * y = power...

function PowersofTwo(num) {

  for (var i = 1; i <= num; i=i*2) {
      if (i === num) {
          return true;
      }
  }

 return false;

}
