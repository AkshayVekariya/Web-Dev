// 5. **Fibonacci Sequence**: Write a JavaScript function to generate the first N numbers of the Fibonacci sequence.

// basic calculation
//   current  + next = answers
// 0 + 1 = 1
// 1 + 1 = 2 
// 1 + 2 = 3 
// 2 + 3 = 5 
// 3 + 5 = 8
// so on N-1;




function fibonacciSequense() {

    do {
        console.log(fn)
        fn = x + y
        x = y;
        y = fn;
    } while (fn < num)

}

const num = 100
let x = 0;
let y = 1
console.log(x)
let fn = x + y;
console.log(fibonacciSequense(x, y))
