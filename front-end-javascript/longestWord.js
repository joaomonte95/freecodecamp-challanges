function findLongestWord(str) {
  strAr = str.split(" ");
  var longestNumber = 0;
  for(var i = 0; i < strAr.length; i++){
    valueLen = strAr[i].length;
    if(valueLen > longestNumber){
      longestNumber = valueLen;
      console.log(longestNumber)
    }
  }
  return longestNumber;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
