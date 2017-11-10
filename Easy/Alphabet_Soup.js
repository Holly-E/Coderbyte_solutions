/*string parameter, return str with letters sorted in alphabetical order
assume numbers and punctuation not included in string */

function AlphabetSoup(str) {

 var arr = str.split("");

 // sort the array in alphabetical order - cool that you can do this!!
 var sorted = arr.sort();

 str = sorted.join("");

return str;

}
