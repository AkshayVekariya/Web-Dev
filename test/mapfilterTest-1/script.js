const products = [
    {
        name: "Ultra HD TV",
        category: "Electronics",
        rating: 4.5,
        price: "$899.99"
    },
    {
        name: "Gaming Laptop",
        category: "Computers",
        rating: 4.7,
        price: "$1299.99"
    },
    {
        name: "Wireless Headphones",
        category: "Accessories",
        rating: 4.3,
        price: "$199.99"
    },
    {
        name: "Smartphone",
        category: "Mobile Phones",
        rating: 4.6,
        price: "$699.99"
    },
    {
        name: "Blender",
        category: "Home Appliances",
        rating: 4.2,
        price: "$49.99"
    },
    {
        name: "Smartwatch",
        category: "Wearables",
        rating: 4.4,
        price: "$249.99"
    },
    {
        name: "Electric Kettle",
        category: "Home Appliances",
        rating: 4.1,
        price: "$39.99"
    },
    {
        name: "Digital Camera",
        category: "Electronics",
        rating: 4.5,
        price: "$499.99"
    },
    {
        name: "Bluetooth Speaker",
        category: "Accessories",
        rating: 4.3,
        price: "$59.99"
    },
    {
        name: "Air Conditioner",
        category: "Home Appliances",
        rating: 4.4,
        price: "$299.99"
    },
    {
        name: "Fitness Tracker",
        category: "Wearables",
        rating: 4.2,
        price: "$129.99"
    },
    {
        name: "Espresso Machine",
        category: "Home Appliances",
        rating: 4.5,
        price: "$349.99"
    },
    {
        name: "Tablet",
        category: "Computers",
        rating: 4.3,
        price: "$499.99"
    },
    {
        name: "Hair Dryer",
        category: "Personal Care",
        rating: 4.2,
        price: "$29.99"
    },
    {
        name: "Robot Vacuum",
        category: "Home Appliances",
        rating: 4.4,
        price: "$199.99"
    },
    {
        name: "Electric Toothbrush",
        category: "Personal Care",
        rating: 4.3,
        price: "$59.99"
    },
    {
        name: "4K Projector",
        category: "Electronics",
        rating: 4.6,
        price: "$899.99"
    },
    {
        name: "Action Camera",
        category: "Electronics",
        rating: 4.5,
        price: "$299.99"
    },
    {
        name: "Electric Shaver",
        category: "Personal Care",
        rating: 4.4,
        price: "$89.99"
    },
    {
        name: "Microwave Oven",
        category: "Home Appliances",
        rating: 4.2,
        price: "$99.99"
    },
    {
        name: "Coffee Maker",
        category: "Home Appliances",
        rating: 4.3,
        price: "$79.99"
    },
    {
        name: "Desktop Computer",
        category: "Computers",
        rating: 4.5,
        price: "$999.99"
    },
    {
        name: "Electric Scooter",
        category: "Transportation",
        rating: 4.3,
        price: "$499.99"
    },
    {
        name: "Air Purifier",
        category: "Home Appliances",
        rating: 4.5,
        price: "$149.99"
    },
    {
        name: "Gaming Console",
        category: "Electronics",
        rating: 4.6,
        price: "$399.99"
    },
    {
        name: "Rice Cooker",
        category: "Home Appliances",
        rating: 4.2,
        price: "$49.99"
    },
    {
        name: "Electric Grill",
        category: "Home Appliances",
        rating: 4.3,
        price: "$79.99"
    },
    {
        name: "Laser Printer",
        category: "Office Supplies",
        rating: 4.4,
        price: "$199.99"
    },
    {
        name: "Dehumidifier",
        category: "Home Appliances",
        rating: 4.3,
        price: "$139.99"
    },
    {
        name: "Stand Mixer",
        category: "Home Appliances",
        rating: 4.6,
        price: "$299.99"
    },
    {
        name: "Dishwasher",
        category: "Home Appliances",
        rating: 4.4,
        price: "$499.99"
    },
    {
        name: "Laptop Stand",
        category: "Office Supplies",
        rating: 4.2,
        price: "$29.99"
    },
    {
        name: "Portable Charger",
        category: "Accessories",
        rating: 4.3,
        price: "$39.99"
    },
    {
        name: "Water Filter",
        category: "Home Appliances",
        rating: 4.3,
        price: "$79.99"
    },
    {
        name: "Drone",
        category: "Electronics",
        rating: 4.6,
        price: "$599.99"
    },
    {
        name: "Wi-Fi Router",
        category: "Electronics",
        rating: 4.3,
        price: "$129.99"
    },
    {
        name: "Electric Pressure Cooker",
        category: "Home Appliances",
        rating: 4.5,
        price: "$89.99"
    },
    {
        name: "Portable Air Conditioner",
        category: "Home Appliances",
        rating: 4.2,
        price: "$399.99"
    },
    {
        name: "Outdoor Grill",
        category: "Home Appliances",
        rating: 4.3,
        price: "$249.99"
    },
    {
        name: "Noise Cancelling Headphones",
        category: "Accessories",
        rating: 4.5,
        price: "$299.99"
    },
    {
        name: "Gaming Chair",
        category: "Furniture",
        rating: 4.4,
        price: "$199.99"
    },
    {
        name: "Electric Blanket",
        category: "Home Appliances",
        rating: 4.2,
        price: "$59.99"
    },
    {
        name: "Bread Maker",
        category: "Home Appliances",
        rating: 4.4,
        price: "$99.99"
    },
    {
        name: "Laptop Cooling Pad",
        category: "Computers",
        rating: 4.2,
        price: "$29.99"
    },
    {
        name: "Webcam",
        category: "Computers",
        rating: 4.3,
        price: "$49.99"
    },
    {
        name: "Portable Hard Drive",
        category: "Computers",
        rating: 4.5,
        price: "$89.99"
    },
    {
        name: "Smartphone Case",
        category: "Accessories",
        rating: 4.4,
        price: "$19.99"
    },
    {
        name: "Screen Protector",
        category: "Accessories",
        rating: 4.3,
        price: "$9.99"
    },
    {
        name: "Smartphone",
        category: "Mobile Phones",
        rating: 4.6,
        price: "$899.99"
    },
    {
        name: "Tablet Stand",
        category: "Computers",
        rating: 4.3,
        price: "$19.99"
    },
    {
        name: "Wireless Charger",
        category: "Accessories",
        rating: 4.4,
        price: "$29.99"
    },
    {
        name: "E-Reader",
        category: "Electronics",
        rating: 4.5,
        price: "$129.99"
    },
    {
        name: "Portable Speaker",
        category: "Accessories",
        rating: 4.3,
        price: "$49.99"
    },
    {
        name: "Electric Fan",
        category: "Home Appliances",
        rating: 4.2,
        price: "$39.99"
    },
    {
        name: "Smart Thermostat",
        category: "Home Automation",
        rating: 4.5,
        price: "$199.99"
    },
    {
        name: "Smart Light Bulb",
        category: "Home Automation",
        rating: 4.4,
        price: "$24.99"
    },
    {
        name: "Smart Door Lock",
        category: "Home Automation",
        rating: 4.5,
        price: "$149.99"
    },
    {
        name: "Electric Air Fryer",
        category: "Home Appliances",
        rating: 4.3,
        price: "$99.99"
    },
    {
        name: "Electric Skillet",
        category: "Home Appliances",
        rating: 4.2,
        price: "$49"
    }
]


const search = document.getElementById("search");
const card = document.getElementById("show-card");

function renderCard(list) {
    let html = "";
    list.map(function (value, index, array) {
        return html += `<div class="card">
    <h4><b> Name:-</b>${value.name}</h4>
    <span><b>Category:-</b>${value.category}</span>
    <p><b>Rating:-</b>${value.rating}</p>
    <p> <b>Price:-</b>${value.price} $</p>
    <button>add card</button>
</div>`
    }); 
    card.innerHTML = html;
}



function searchMethodOnProduct() {
    const cardValue = search.value.toLowerCase();
    // console.log(cardValue)
    let filteredList;
    const i = isNaN(cardValue);
    if (i) {
        filteredList = products.filter(function (value, index, array) {
            if (value.name.toLowerCase().includes(cardValue) || value.category.toLowerCase().includes(cardValue)) {
                // console.log(value)
                return true;
            } else {
                return false;
            }
        });
    } else {
        filteredList = products.filter(function (value, index, array) {
            if (value.price >= cardValue || value.rating >= cardValue) {
                return true;
            } else {
                return false;
            }
        });
    }
    renderCard(filteredList);
}

renderCard(products);

function ElectronicsFunc (){
    let ele = "Electronics";
    let ElectronicsProduct = products.filter(function(value){
        if( ele === value.category){
            return true
        }
    })
    renderCard(ElectronicsProduct)
}
ElectronicsFunc(products)

function ComputersFunc (){
    let comp = "Computers";
    let ComputersProduct = products.filter(function(value){
        if( comp === value.category){
            return true
        }
    })
    renderCard(ComputersProduct)
}
ComputersFunc(products)


function AccessoriesFunc(){
    let Acc = "Accessories";
    let AccessoriesProduct = products.filter(function(value){
        if( Acc === value.category){
            return true
        }
    })
    renderCard(AccessoriesProduct)
}
AccessoriesFunc(products)


function MobilePhonesFunc(){
    let Mobile = "MobilePhones";
    let MobilePhonesProduct = products.filter(function(value){
        if( Mobile === value.category){
            return true
        }
    })
    renderCard(MobilePhonesProduct)
}
MobilePhonesFunc(products)


function HomeAppliancesFunc(){
    let HomeAppliances = "HomeAppliances";
    let HomeAppliancesProduct = products.filter(function(value){
        if( HomeAppliances === value.category){
            return true
        }
    })
    renderCard(HomeAppliancesProduct)
}
HomeAppliancesFunc(products)


function WearablesFunc(){
    let Wearables = "Wearables";
    let WearablesProduct = products.filter(function(value){
        if( Wearables === value.category){
            return true
        }
    })
    renderCard(WearablesProduct)
}
WearablesFunc(products)


function PersonalCareFunc (){
    let PersonalCare = "PersonalCare";
    let PersonalCareProduct = products.filter(function(value){
        if( PersonalCare === value.category){
            return true
        }
    })
    renderCard(PersonalCareProduct)
}

PersonalCareFunc(products)


function clear(){

}

