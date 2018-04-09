function confirmEnding(str, target) {
  lenAuxStr = str.length;
  lenAuxTrgt = target.length;

  for(var i = 0; i<lenAuxTrgt; i++){
    if(str[lenAuxStr - i -1] != target[lenAuxTrgt - i -1]){
      return false;
    }
  }
  return true;
}

console.log(confirmEnding("Bastian", "n"));
