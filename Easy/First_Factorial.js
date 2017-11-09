/*Take num parameter and return its factorial
(e.g if num = 4, return (4*3*2*1)*/

function FirstFactorial(num) {

 var factorial = 1;

 for (var i = 1; i <= num; i++) {
     factorial = factorial * i;
 }


 return factorial;

}
