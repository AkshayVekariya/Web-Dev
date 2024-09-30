let a = [1,2,3,5,6]

function sumOfValue (value){
     sum = 0
    for (let i in value){
   sum += Math.pow(a[i], 2)
}
console.log(sum)
    
}
sumOfValue(a)