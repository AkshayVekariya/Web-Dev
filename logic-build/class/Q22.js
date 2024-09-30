function unionArray(value1, value2) {
  const newarray = new Set([...value1, ...value2]);
  const value = Array.from(newarray);
  return value.sort(function (a, b) {
    return a - b;
  });
}

console.log(unionArray([1, 2, 3], [10, 1, 3, 2]));
