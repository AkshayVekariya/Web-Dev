// 9. **Temperature Converter**: Write a program that converts temperatures between Fahrenheit and Celsius.

function cTOf(Celsius){
    
    let temp = Celsius* 9 / 5 + 32
    return temp
}

function fTOc(Fahrenheit){
    let temp =( Fahrenheit -32)  * 5 / 9
    return temp
}

let tempName = 34;
let result = fTOccls(tempName)
console.log(result)