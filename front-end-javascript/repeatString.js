function repeatStringNumTimes(str, num) {
  // repeat after me
  strOutput = "";
  if(str.length>0){
    for(var i = 0; i < num; i++){
      strOutput += str;
    }
    return strOutput;
  } else {
    return strOutput;
  }
}

console.log(repeatStringNumTimes("abc", -2));
