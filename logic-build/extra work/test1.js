const arr = [1, 4, 5, 0, 5, 0]
const newArr = [1, 2, 3, 5, 6, 0]
const samevalue = []
const notsameValue = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < newArr.length; j++) {
        if (arr[i] == newArr[j]) {
            samevalue.unshift(newArr[j])
        }else{
            notsameValue.unshift(newArr[j])
        }
    }
}

console.log(samevalue)
console.log(notsameValue)
