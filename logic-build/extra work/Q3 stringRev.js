// 4. **String Reversal**: Write a function that takes a string as input and returns the reverse of that string.

function str (value){

return value.split(" ").reverse().join()
}
let syntax = "hello i am good "
let result = str(syntax)
console.log(result)