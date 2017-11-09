/* Take string parameter(str) and capitalize first
letter of each word. Words separated by one space.*/


function LetterCapitalize(str) {

var arr = str.split(" ");

var arr2 = arr.map(function cap(el){
    return el.charAt(0).toUpperCase() + el.slice(1);
});

str = arr2.join(" ");

return str;

}
