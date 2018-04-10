function mutation(arr) {
  var auxLength = arr[1].length;
  var notFoundAux;
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  for(var i = 0; i < auxLength; i++){
    notFoundAux = arr[0].indexOf(arr[1][i]);
    if(notFoundAux < 0){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
