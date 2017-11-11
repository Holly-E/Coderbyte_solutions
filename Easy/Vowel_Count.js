//pass parameter str, return number of vowels in str (not counting y)

function VowelCount(str) {

  var arr = str.match(/[a|e|i|o|u]/gi);

  //.match returns null if no vowels are found
  if (arr === null) {
      arr = [];
  }

  return arr.length;

}
