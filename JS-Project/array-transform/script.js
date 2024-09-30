let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function arrtransfomr(el){
    let starPrint = [];
    for (let i = 0; i < arr.length; i++) {
        let newcall = "";
            for (let j = 0; j <= i; j++) {
           newcall += "*";
        }
        starPrint.push(newcall);
    }

console.log(starPrint)
}
 
arrtransfomr(arr)


// table

function table(value) {
     
    let newtable = [];
    for (let m = 1; m <= value.length; m++) {
        let arr2 = []
        for (let k = 1; k <= value.length; k++) {
            let mul
            for (let l = 1; l <= m; l++) {
                mul = k *  l
            }
            arr2.push(mul)
        }
        newtable.push(arr2)
    }

    console.log(newtable)
}

table(arr)



