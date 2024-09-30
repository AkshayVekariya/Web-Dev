// 6. **Palindrome Checker**: Create a function that checks if a given word or phrase is a palindrome (reads the same backward as forward).

function CheckPilldrome(value) {

    let reWord = value.split("").reverse().join("")

if (value === reWord) {
    console.log("your word is palindrome")
} else {
    console.log("your word is not a palidrome")
}
  
}
let word = "racecar";
CheckPilldrome(word)