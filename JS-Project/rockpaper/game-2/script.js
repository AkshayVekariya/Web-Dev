
let CScore = 0;
let PScore = 0;
let Dscore = 0
let roundCount = 0;
const maxRounds = 3;

function randomNumber() {
    return Math.floor(Math.random() * 3 + 1);
}
const player1 = document.getElementById("player")
const Draw2 = document.getElementById("Draw")
const computer3 = document.getElementById("computer")
const result = document.getElementById("result")

function myFunction(value) {

    if (roundCount >= maxRounds) {
        // result.innerText = "Game over! Please refresh to play again.";   
        return;
    }
    roundCount++;
    console.log(`Round:-${roundCount}`)

    if (value === 1) {

        if (randomNumber() === 1) {
            // rock === rock = draw
            Dscore++
            Draw2.innerText = `Match Draw:- ${Dscore}`

        } else if (randomNumber() === 2) {
            // rock === paper = lose
            CScore++
            computer3.innerText = `computer score:- ${CScore}`
        } else {
            // rock === scissors = win
            PScore++
            player1.innerText = `player score:-${PScore}`
        }
    } else if (value === 2) {
        if (randomNumber() === 1) {
            PScore++
            player1.innerText = `player score:${PScore}- `
            // paper === rock = win
        } else if (randomNumber() === 2) {
            // paper === paper = draw
            Dscore++
            Draw2.innerText = `Match Draw:- ${Dscore}`

        } else {
            // paper === scissors = lose
            CScore++
            computer3.innerText = `computer score:- ${CScore}`

        }
    } else {
        if (randomNumber() === 1) {
            // scissors === rock = lose
            CScore++
            computer3.innerText = `computer score:- ${CScore}`


        } else if (randomNumber() === 2) {
            // scissors === paper = win
            PScore++
            player1.innerText = `player score:- ${PScore}`

        } else {
            // scissors === scissors = draw
            Dscore++
            Draw2.innerText = `Match Draw:- ${Dscore}`

        }
    }


if (roundCount === maxRounds) {
    let finalResult = "";
    if (PScore > CScore) {
        finalResult = `Player won the game by: ${PScore}`;
    } else if (CScore > PScore) {
        finalResult = `Computer won the game by: ${CScore}`;
    } else {
        finalResult = `Game is Draw: ${Dscore}`;
    }
    console.log(finalResult)
    result.innerText = `Game over! ${finalResult} `;
    result.style.display = "block";
}

}
