/* String parameter passed, return largest word in str.
If two longest words are same length return the first word.
Ignore punctuation */

function LongestWord(sen) {

   //use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // the pattern we define returns only the characters a through z and 0 through 9, stripping away punctuation
  //the plus sign means one or more letters or numbers, without it each char would be it's own string
 var arr = sen.match(/[a-z0-9]+/gi);

  // sort the array in order from longest to shortest length
 var sorted = arr.sort((a,b) => {
    return b.length - a.length;
 });


return sorted[0];
}
