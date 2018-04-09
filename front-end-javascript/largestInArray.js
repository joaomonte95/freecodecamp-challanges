function largestOfFour(arr) {
  // You can do this!
  var countArr = [];
  for(var i = 0; i < arr.length; i++){
    var countAux = 0;
    var lenAux = arr[i].length;
    for(var j = 0; j < lenAux; j++){
      if(arr[i][j] > countAux){
        countAux = arr[i][j];
      }
    }
    countArr = countArr.concat(countAux);
  }
  return countArr;
}



console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
