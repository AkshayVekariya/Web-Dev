const word = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "value",
    "new",
    "dot",
    "brother",
    "car",
    "cosnt",
    "ehter",
    "network"
];

const computer = document.getElementById("computer-word");
const user = document.getElementById("user-word");
const win = document.getElementById("lose-win")

// first select random word in array

function randomWord(value) {
    const randomIndex = Math.floor(Math.random() * word.length);
    return value[randomIndex];
}

// second how many underscore in word
function randomOf_(value) {
    const _potion = Math.floor(value.length / 2);
    return _potion;
}

// find the potion of the underscore

function postionOf_(words, underscore) {
    let postion = [];
    for (let i = 0; i < underscore; i++) {
        const postion_ = Math.floor(Math.random() * words.length);
        if (postion.includes(postion_)) {
            i--;
        } else {
            postion.push(postion_);
        }
    }
    return postion;
}

//  create new word with underscore

function creeteNewWord(words, index) {
    let newString = "";
    for (let i = 0; i < words.length; i++) {
        if (index.includes(i)) {
            newString += "_";
        } else {
            newString += words[i];
        }
    }
    return newString;
}
// check user valid input or not if input is empty string return please input word 
let words

function check(e) {
    if (e.keyCode === 13 || e.type === "click") {
        if (user.value === "") {
            win.innerText = "😣";
            return;
        }

        if (user.value === words) {
            win.innerText = "🤩";
            user.value = ""
            submit();
        } else {
            win.innerText = "🤡";
            user.value = ""
        }
    }
}

// fourth user input comper with randomwords

function submit() {
    if (word.length > 0) {
        words = randomWord(word);
        let wordsOfUnderscore = randomOf_(words);
        let _postion = postionOf_(words, wordsOfUnderscore);
        let newWord = creeteNewWord(words, _postion);
        computer.innerText = newWord;
    } else {
        alert('game over');
    }
}
submit();


