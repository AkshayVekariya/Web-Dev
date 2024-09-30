let transform = "Hello Wolrd"

let swap = transform.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("")

console.log(swap);