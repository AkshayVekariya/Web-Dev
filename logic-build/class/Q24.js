function returnFalseValue(value){
  return  value.filter(Boolean)
}

console.log(returnFalseValue([NaN, 0, 15, false, -22, '', undefined, 47, null]))

