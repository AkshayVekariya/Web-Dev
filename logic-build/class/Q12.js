let numbers = [2, 4, 6, 8, 10];

function sumOf() {
  let newsum = numbers.reduce(function (previuse, currentValue) {
    return previuse + currentValue;
  });
  console.log(newsum);
}
function newProductOf() {
  let ProductOf = numbers.reduce(function (previuse, currentValue) {
    return previuse * currentValue;
  });
  console.log(ProductOf);
}

sumOf(numbers);
newProductOf(numbers);
