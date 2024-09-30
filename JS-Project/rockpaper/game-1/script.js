// condition

// rock === rock = draw
// rock === paper = lose
// rock === scissors = win


// paper === rock = win
// paper === paper = draw
// paper === scissors = lose


// scissors === rock = lose
// scissors === paper = win
// scissors === scissors = draw
const output = document.getElementById("output")

function randomNumber() {
    return Math.floor(Math.random() * 3 + 1);
}


function myFunction(value) {

    if (value === 1) {

        if (randomNumber() === 1) {
            output.style.display = "block";
            output.innerText = "Draw";
        } else if (randomNumber() === 2) {
            output.style.display = "block";
            output.innerText = "Computer Win";
        } else {
            output.style.display = "block";
            output.innerText = "You Win";
        }

    } else if (value === 2) {

        if (randomNumber() === 1) {
            output.style.display = "block";
            output.innerText = "You won";
        } else if (randomNumber() === 2) {
            output.style.display = "block";
            output.innerText = "Draw";
        } else {
            output.style.display = "block";
            output.innerText = "Computer Win";
        }

    } else {

        if (randomNumber() === 3) {
            output.style.display = "block";
            output.innerText = "you Win";
        }else if(randomNumber() === 2){
            output.style.display = "block";
            output.innerText = "Computer Win";
        }else{
            output.style.display = "block";
            output.innerText = "Draw";
        }
    }

}







