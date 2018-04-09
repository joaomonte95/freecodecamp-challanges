function factorialize(num) {
  var val = 1;
  for (var i = num; i >= 2; i--) {
    val = val * i;
  }
  return val;
}

factorialize(5);
