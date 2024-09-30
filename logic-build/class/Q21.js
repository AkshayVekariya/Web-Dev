function flatten1(value) {
    return value.flat(2)
}

console.log(flatten1([1, [2], [3, [[4]]],[5,6]]));