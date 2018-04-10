function destroyer(arr) {
  for(var i = 1; i < arguments.length; i++){
    arr = arr.filter(element => element != arguments[i]);
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
