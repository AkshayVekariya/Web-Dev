const input = document.getElementById("input")
const cSelect = document.getElementById("currency-select")
const convert = document.getElementById("currency-cal")



function convertCurrency() {

    const result = input.value
    const currencySelect = cSelect.value.toLowerCase()


    if (currencySelect === "usd") {
        const amount = result * 83
        convert.innerText = amount
    } else if (currencySelect === "eur") {
        const amount = result * 105;
        convert.innerText = amount;
    } else {
        convert.innerText = "this currency is not available";
    }
}