/* Input array of strings, return third largest in length. If strings lengths are ties assume they are ordered left to right. */

function ThirdGreatest(strArr) {

function sorted(a,b) {
    //sort based on length
    return b.length - a.length;
}

 strArr.sort(sorted);

 return strArr[2];

}
