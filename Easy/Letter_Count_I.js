/*parameter str, return the word that has the most repeating letters
If it's a tie, return the first winning word
If no words have repeating letters return -1 */

function LetterCountI(str) {

var arr = str.toLowerCase().split(" ");

  // the hash table that will contain each letter as the key
  // and the number of times it occurs as the value
  // e.g. {"h": 1, "e": 3, "l": 1}
  var table = {};
  // setup a new object that will store the letter with the highest count
  var most = {
      letter: undefined,
      count: 0,
      word: undefined
  };

  // loop through each letter in the array
  // see if this number already exists in table
  // if so add 1 to the count, if not set count = 1
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        var letter = arr[i][j];
        if (table[letter] === undefined) {
            table[letter] = 1;
        } else {
            table[letter] += 1;
        }
    }
    // determine what letter appears most often in the table
    //perform after looping through each word, before moving to next word
    for (var n in table) {
      if (table[n] > most["count"]) {
        most["count"] = table[n];
        most["letter"] = n;
        most["word"] = arr[i];
      }
    }
    //reset table before loop for next word
    table = {};
    }

 //if no repeating letters print -1 else print the winning word
  return (most.count === 1) ? -1: most.word;
}
