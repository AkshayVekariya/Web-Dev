function first(array, n) {
  if (array == null) {
    return  void 0
  } else if (n == null) {
    return array[0];
  } else if (n < 0) {
    return [];
  } else {
    return array.slice(0, n);
  }
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
