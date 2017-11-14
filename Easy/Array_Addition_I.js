//with parameter of an array of numbers
//determine if any combination of the numbers add up to the largest of the numbers
//if yes return true, if not return false
function ArrayAdditionI(arr) {

//determine largest number in array of numbers
var largest = arr.reduce((a, b) => {
    return Math.max(a, b);
});

//remove largest number from array.
//Note this removes the largest number from original array
//but if you set it equal to a new variable
//the new variable will be equal to what you removed
arr.splice(arr.indexOf(largest), 1);


// create a power set to generate all possible sets of an array
  var sets = [[]];

//adds on all possible set combinations up to arr[i];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
        var temp = sets[j].concat(arr[i]);
        sets.push(temp);

        //for each new set, reduce the set to a single value by adding all values to each other
        var s = temp.reduce(function (accumulator, currentVal){
            return accumulator + currentVal;
        })

        if (s == largest) {
            return true;
        }
    }
}
return false;

}
