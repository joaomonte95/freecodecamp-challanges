function titleCase(str) {
  str = str.split(" ")
  for (var i = 0; i < str.length; i++) {
    subLen = str[i].length;
    var SubStr = ""
    for(var j = 0; j < subLen; j++){
      if(j == 0){
        SubStr += str[i][j].toUpperCase();
      } else {
        SubStr += str[i][j];
      }
    }
    str[i] = SubStr
  }
  return str.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
