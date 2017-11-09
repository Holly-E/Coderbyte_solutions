/* Take str input and replace every letter
with the letter following it in the alphabet.
Capitalize all vowels in new string and return modified string. */

function LetterChanges(str) {

  var changed = str.replace(/[a-z]/gi, function change(char){
      return (char === 'z') || (char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

  var capitalize = changed.replace(/a|e|i|o|u/gi, function cap(char){
      return char.toUpperCase();
  });

  return capitalize;
         
}
