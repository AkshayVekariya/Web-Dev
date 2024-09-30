console.log("wellcome to spotify")

// Initialize Variables

let songIndex = 0;
const audioElement = new Audio('songs/1.mp3');
const previous = document.getElementById('previous');
const masterPlay = document.getElementById('masterPlay');
const next = document.getElementById('next');
const myProgressBar = document.getElementById('myProgressBar');
const gif = document.getElementById('gif');
const songItem = Array.from(document.getElementsByClassName('songItem'))


let songs = [
    { songName: "1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

//Handle  change music to previous

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


// Handle Play/Pause click

masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }

});

// Handle  change music to next





// Listen to Events

audioElement.addEventListener('timeupdate', () => {

    // update seekbar

    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(Progress)
    myProgressBar.value = Progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {

        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }

    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})