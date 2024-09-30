const arr =[NaN, 0, 15, false, -22, '',undefined, 47, null]

function retreiveValue (value){
return value.filter(Boolean)
}

console.log((retreiveValue(arr)));