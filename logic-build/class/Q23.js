function difference(value1, value2) {
  const array1 = value1.flat(Infinity);
  const array2 = value2.flat(Infinity);

  const arr1 = array1.filter((value) => !array2.includes(value));
  const arr2 = array2.filter((value) => !array1.includes(value));

  const newarr = [...arr1, ...arr2];
  return newarr.sort((a, b) => a - b);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
