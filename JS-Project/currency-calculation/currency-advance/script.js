// input access on js

const inputOne = document.getElementById("input-first")
const inputSecond = document.getElementById("input-second")

// select access on js

const pairOne = document.getElementById("pair-one");
const pairTwo = document.getElementById("pair-second");

// onClick Function

function convertCurrency() {

    const inputFirst = inputOne.value;
    const inputTwo = inputSecond.value;

    const pairFirst = pairOne.value.toUpperCase();
    const pairSecond = pairTwo.value.toUpperCase();


    if (inputFirst && pairFirst) {
         if (pairFirst === "USD") {
            const convert = inputFirst * 0.92;
            console.log(convert)
            inputSecond.value = convert;
        } else if (pairFirst === "EUR") {
            convert = inputFirst * 1.09
            console.log(convert)
            inputSecond.value = convert;
        }

    } else {
        if (pairSecond === "EUR") {
            convert = inputTwo * 1.09;
            inputOne.value = convert;
        } else if (pairSecond === "USD") {
            convert = inputTwo * 0.92;
            inputOne.value = convert;
        }

    }

}
