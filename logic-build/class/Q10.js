let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let x in a){
    console.log(`row ${x}`);
    for (let j in a[x]){
        console.log(a[x][j])
    }
}