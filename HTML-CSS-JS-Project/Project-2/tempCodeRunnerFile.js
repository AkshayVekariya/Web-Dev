console.log("wellcome to spotify")

// Initialize Variables

let songIndex = 0;
let audioElement =  new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');


let songs = [
    
    {
        songName: "1",
        filePath: "1.mp3",
        coverPath: "covers/1.jpg"
    }
]

// audioElement.play();

// Handle Play/Pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

// Listen to Events

myProgressBar.addEventListener('timeupdate', ()=>{
console.log('timeupdate');
// upader seekbar
})