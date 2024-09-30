// squer star pattern-1


// let squer = "";
// for (let row = 0; row<=5; row++){
// for(let col = 0; col<=5; col++){
//     squer +=" *"
// }
// squer+= "\n"
// }
// console.log(squer)

// hollow squre pattern-2 

// output:-  
// *****
// *   *
// *   *
// *   *
// *****
// let n = 5
// let space = ""

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {

//         if (i === 0 || i === n - 1) {
//             space += "* "
//         } else {
//             if (j === 0 || j === n-1) {
//                 space += "* "
//             }else{
//                 space += "  "
//             }
//         }
//     }
//     space += "\n"
//     debugger;
// }
// console.log(space)


// right triangle pattern -3

// let right = "";
// for (let row = 0; row <= 5; row++) {
//     for (let col = 0; col <= 5-row; col++ ) {
//         right += "  "
//     }
//     for(let cr = 0; cr<=row; cr++){
//         right += "* "
//     }
//     right += "\n"
// }
// console.log(right)

// left triangle pattern-4

// let tLeft = ""
// for (let row = 0; row <= 5; row++) {
//     for (let col = 0; col <= row; col++) {
//         tLeft += " *"
//     }
//     tLeft += "\n"
// }
// console.log(tLeft)


// downWord star pattern-5

// let downWord = "";

// for (let row = 0; row <= 5; row++) {

//     for (let col = 0; col <= 5 - row; col++) {
//         downWord += " *"
//     }
//     downWord += "\n"
// }
// console.log(downWord)

// hollow triaangle pattern -5


// let n = 5
// let ht = ""

// for (let i = 0; i <= n; i++) {

//     for (let j = 0; j <= n; j++) {

//         if (i === n) {

//             ht += "* "

//         } else {

//             if (j == 0 || j == i) {
//                 ht += "* "    
//             } else {
//                 ht += "  "
//             }

//         }
//     }
//     ht += "\n"
// }
// console.log(ht)

// pyramid pattern

// let n = 5
// let pyramid = ""
// for (let row = 0; row <= n; row++) {

//     for (let col = 1; col <= n -row ; col++) {
//         pyramid += " "
//     }

//     for (let rc = 0; rc < 2 * row -1; rc++) {
//         pyramid += "*"
//     }

//     pyramid += ("\n")
// }
// console.log(pyramid)


//downward pyramid
// let n = 5;
// let dpyramid = "";
// for (let row = 0; row <= n; row++) {

//     for (let col = 0; col <= row ; col++) {
//         dpyramid += " ";
//     }

//     for (let drc = 0; drc < 2* (n-row)-1; drc++) {
//         dpyramid += "*";
//     }

//     dpyramid += "\n"
// }
// console.log(dpyramid)


// hollow star pyramid
// let n = 5;
// let hollowPyramid = ""
// for (let row = 1; row <= n; row++) {

//     for (let col = 1; col <= n - row; col++) {

//         hollowPyramid += " "

//         for (let j = 0; j < 2 * row - 1; j++)

//             if (n === 1 || row === n) {
//                 hollowPyramid += "*"
//             } else {

//                 if (j === 0 || j === 2 * row - 2) {
//                     hollowPyramid += "*"
//                 } else {
//                     hollowPyramid += " "
//                 }

//             }
//     }
//     hollowPyramid += "\n"
// }
// console.log(hollowPyramid)

let n = 12;

let pattern = "";

for(let row = 1; row <= n; row++) {
    for(let col = 1; col <= n * 2 - 1; col++) {
        if(row <= n - 1) {
            if(col == n - (row - 1) || col == n + (row - 1)) {
                pattern += "x";
            } else {
                pattern += " ";
            }
        } else {
            pattern += "x";
        }
    }
    pattern += "\n";
}

console.log(pattern);