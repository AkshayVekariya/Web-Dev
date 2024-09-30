

const CustomerBill = document.getElementById("Customerbill")
const buy = document.getElementById("buy")
const discount = document.getElementById("discount")
const CustomerPay1 = document.getElementById("CustomerPay")



function Customer() {
    const num = Number(CustomerBill.value) 
    if (num >= 1000 && num < 4000) {

        const Dcalculation1 = num * 10 / 100
        const CustomerPay = num - Dcalculation1

        buy.innerText = num;
        discount.innerText = Dcalculation1;
        CustomerPay1.innerText = CustomerPay;
    } else if (num >= 4000) {
        const Dcalculation2 = num * 20 / 100
        const CustomerPay = num - Dcalculation2
        buy.innerText = num;
        discount.innerText = Dcalculation2;
        CustomerPay1.innerText = CustomerPay;
    }
    else {
        buy.innerText = num;
        discount.innerText = Dcalculation;
        CustomerPay1.innerText = CustomerPay;
    }
}


