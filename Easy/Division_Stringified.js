//parameter two numbers. divide num1 by num2. add commas where they should go

function DivisionStringified(num1,num2) {
//use Math.round not Math.floor!
var answer = Math.round(num1 / num2);
var answerArr = answer.toString().split("");

//reverse array and for every third number change it to ',number'
answerArr = answerArr.reverse();

/*loop through starting with 3rd from end, adding comma every 3 places
length-1 because we don't want a comma in front of the first number
comma won't be added if answer length is 3 b/c while i = 2, 2 !< answerArr.length - 1 */
for (var i = 2; i < answerArr.length-1; i+=3) {
    answerArr[i] = "," + answerArr[i];
}
//put back in order and join
return answerArr.reverse().join("");
}
