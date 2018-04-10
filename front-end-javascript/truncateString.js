function truncateString(str, num) {
  var lenStrAux = str.length;
  var strAux = "";
  var dotString = "...";

  if(num <= 3){
    for(var i = 0; i < num; i++){
      strAux += str[i];
    }
    strAux += dotString;
  }
  else if(num >= lenStrAux){
    for(var j = 0; j < lenStrAux; j++){
      strAux += str[j];
    }
  } else {
    for(var k = 0; k < num - 3; k++){
      strAux += str[k];
    }
    strAux += dotString;
  }
  return strAux;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
