const numbers = [10, 20, 10, 40, 50, 60, 70]
const target = 50;

for (let i = 0; i < numbers.length; i++) {

    for (let j = 0; j <= i; j++){

        if (numbers[i] + numbers[j] == 50) {
            console.log(`i is ${numbers[i] } + j is ${numbers[j] } = 50`)
        }
        
    }
}
