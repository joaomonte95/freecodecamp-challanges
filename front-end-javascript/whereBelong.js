function getIndexToIns(arr, num) {
  lenAux = arr.length;
  arr.sort(function(a,b){
    if(a>b){
      return 1;
    }
    if (a<b){
      return -1
    }
    return 0;
  });
  for(var i = 0; i < lenAux; i++){
    if(num == arr[i]){
      return i;
    }
    if(i != lenAux - 1 && num > arr[i] && num < arr[i+1]){
      return i+1;
    }
  }
  return lenAux;
}

console.log(getIndexToIns([3, 10, 5], 3));
