const arr1 = [4, 5, 8, 10, 12, 15, 3, 5, 3];

const findDuplicateArray = arr1.filter(function (item, index) {
 return  arr1.indexOf(item) !== index;
});

console.log(findDuplicateArray);
