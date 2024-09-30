const gameStart = document.getElementById('start')
const input = document.getElementById("input")
const hmtl = document.getElementById('result')
const play = document.getElementById('playAgain')
let YourScore = 100
let player

function play() {
    random_Numuber_Genrat()
    ClearFields()
    guessTheNumber()
    game_Condition() 
}

function PlayAgain() {
    random_Numuber_Genrat()
    ClearFields()
    guessTheNumber()
    startExit() 
}

function random_Numuber_Genrat() {
    return genNum = Math.floor(Math.random() * 100)
}

function game_Condition() {
    return startOver = {
        isStart: false,
        start: function () {
            if (this.isStart === false) {
                gameStart.innerText = 'Exit-Game'
                return this.isStart = true;

            } else {
                gameStart.innerText = 'PlayGame'
                return this.isStart = false;
            }
        },

    }
}

function ClearFields() {
  return  document.getElementById("input").value = "";
}


function guessTheNumber() {
    const inputValue = input.value
    player = Number(inputValue)
    if (startOver.isStart) {
        if (player < genNum) {
            hmtl.innerHTML = `<div id="result-1">
                <p>${player}</p>
                <p><span class="material-symbols-outlined">
                       arrow_downward                  
                    </span></p>
                <p>down range</p>
            </div>`
            ClearFields()
            YourScore--
        } else if (player === genNum) {
            hmtl.innerHTML = `<div id="result-3">
                <p>${player}</p>
                <p><span class="material-symbols-outlined">
                        check
                    </span></p>
                <p>currect</p>
                <div>
                <span>Your-Score:-${YourScore}</span>
                </div>
            </div>`
            play.style.display = "block"
            ClearFields()
            YourScore--
        } else if (player > genNum) {
            hmtl.innerHTML = `<div id="result-2">
                    <p>${player}</p>
                    <p><span class="material-symbols-outlined">
                            arrow_upward
                        </span></p>
                    <p>upper range</p>
                </div>`
            ClearFields()
            YourScore--
        }
    } else {
        hmtl.innerHTML = "please start game first"
        ClearFields()
    }
}