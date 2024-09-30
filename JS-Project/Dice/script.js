let img = document.getElementById("img");
let img1 = document.getElementById("img1");
img.setAttribute("src", "dice-img/dice-solid.svg")
img1.setAttribute("src", "dice-img/dice-solid.svg")


function DiseRole() {
    return Math.floor(Math.random() * 6 + 1);
}
function DiseRole2() {
    return Math.floor(Math.random() * 6 + 1);
}


function img2() {

    const dice = DiseRole();
    const dise2 = DiseRole2();


    if (dice === 1) {
        img.setAttribute("src", "dice-img/dice-one-solid.svg")
    } else if (dice === 2) {
        img.setAttribute("src", "dice-img/dice-two-solid.svg")
    } else if (dice === 3) {
        img.setAttribute("src", "dice-img/dice-three-solid.svg")
    } else if (dice === 4) {
        img.setAttribute("src", "dice-img/dice-four-solid.svg")
    } else if (dice === 5) {
        img.setAttribute("src", "dice-img/dice-five-solid.svg")
    } else {
        img.setAttribute("src", "dice-img/dice-six-solid.svg")
    }



    if (dise2 === 1) {
        img1.setAttribute("src", "dice-img/dice-one-solid.svg")
    } else if (dise2 === 2) {
        img1.setAttribute("src", "dice-img/dice-two-solid.svg")
    } else if (dise2 === 3) {
        img1.setAttribute("src", "dice-img/dice-three-solid.svg")
    } else if (dise2 === 4) {
        img1.setAttribute("src", "dice-img/dice-four-solid.svg")
    } else if (dise2 === 5) {
        img1.setAttribute("src", "dice-img/dice-five-solid.svg")
    } else {
        img1.setAttribute("src", "dice-img/dice-six-solid.svg")
    }

}
