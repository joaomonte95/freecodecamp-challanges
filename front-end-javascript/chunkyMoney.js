function chunkArrayInGroups(arr, size) {
  var indexAux = 0;
  var arrLength = arr.length;
  var newArr = [];
  while(indexAux < arrLength){
    newArr.push(arr.slice(indexAux,indexAux + size));
    indexAux += size;
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
