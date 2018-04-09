function palindrome(str) {
  removeSymbols = /\W+|_/;
  str = str.toLowerCase();
  var newStr = str;
  while(newStr.match(removeSymbols)){
    newStr = newStr.replace(removeSymbols,"");
  }
  for (var i = 0; i < newStr.length; i++) {
    if(newStr[i] !== newStr[newStr.length - 1 - i]){
      return false;
    }
  }
  return true;
}


console.log(palindrome("A man,_a_plan,_a canal. Panama"));
