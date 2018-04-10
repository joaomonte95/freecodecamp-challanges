function rot13(str) { // LBH QVQ VG!
  var auxVal;
  var outStr = "";
  for(var i = 0; i < str.length; i++){
    auxVal = str.charCodeAt(i);
    if(auxVal < 65 + 13 && auxVal >= 65){
      outStr += String.fromCharCode(91 + auxVal - 78);
    }
    else if(auxVal >= 78 && auxVal <= 90){
      outStr += String.fromCharCode(auxVal - 13);
    }
    else {
      outStr += String.fromCharCode(auxVal);
    }
  }
  return outStr;
}

// Change the inputs below to test
console.log(rot13("LBH QVQ VG"));
