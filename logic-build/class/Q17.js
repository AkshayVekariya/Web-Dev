let arr = [1, 2, 3, 4, 5, 6,223];
let randomPosition = [];
let ramdom = []
while(randomPosition.length < arr.length) {
  const randomIndex = Math.floor(Math.random() * arr.length);

    
    if (!randomPosition.includes(randomIndex)) {
        randomPosition.push(randomIndex);  
    }
}
  
for (let i of randomPosition) {
  ramdom.push(arr[i])
}


console.log(ramdom);





