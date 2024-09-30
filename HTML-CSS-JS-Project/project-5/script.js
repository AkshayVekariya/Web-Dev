const arrProduct = [
    {
        url: "images/p1.png",
        heading: "necklase",
        price: "price $200",
        new: "new"
    },
    {
        url: "images/p2.png",
        heading: "necklase",
        price: "price $300",
        new: "new"
    },
    {
        url: "images/p3.png",
        heading: "necklase",
        price: "price $110",
        new: "new"
    },
    {
        url: "images/p4.png",
        heading: "necklase",
        price: "price $45",
        new: "new"
    },
    {
        url: "images/p5.png",
        heading: "necklase",
        price: "price $95",
        new: "new"
    },
    {
        url: "images/p6.png",
        heading: "necklase",
        price: "price $70",
        new: "new"
    },
    {
        url: "images/p7.png",
        heading: "necklase",
        price: "price $400",
        new: "new"
    },
    {
        url: "images/p8.png",
        heading: "necklase",
        price: "price $450",
        new: "new"
    },
]

const productsList = document.getElementById("products-content")

let html = ""

for(let i = 0; i< arrProduct.length; i++){
    html+=  ` <div class="box-products">
                         <div class="box-detail">

                            <div class="products">
                                <img src="${arrProduct[i].url}" alt="">
                            </div>
                            <div class="n-price">
                                <p>${arrProduct[i].heading}"</p>
                                <span>${arrProduct[i].price}"</span>
                            </div>
                            <div class="new">
                                <span>${arrProduct[i].new}"</span>
                            </div>
                        </div>
                    </div>`
}
productsList.innerHTML = html;