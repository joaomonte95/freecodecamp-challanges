function bouncer(arr) {
  const result = arr.filter(arr => Boolean(arr) != false);
  return result;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));
