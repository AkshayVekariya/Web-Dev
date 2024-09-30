var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// var count = 0
// for (let x of arr1) {
//     if (x === "a") {
//         count++
//     }
//     }

// console.log("a : " + count +" time");


let obj = {}

for (let x in arr1) {
    if (arr1[x] === "a") {
        obj++
    }
}