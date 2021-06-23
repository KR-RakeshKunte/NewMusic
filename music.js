const song = document.querySelector('#song');
const progressBar = document.querySelector('#progress-bar'); 
let pPause = document.querySelector('#play-pause'); 

let playing = true;
function playPause() {
    if (playing) {
        const song = document.querySelector('#song')
        pPause.src = "green_globe_pause_589.jpg"
        song.play();
        playing = false;
    } else {
        const song = document.querySelector('#song')
        pPause.src = "play.png"
        song.pause();
        playing = true;
    }
}

function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};


function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};


setInterval(updateProgressValue, 200);


function changeProgressBar() {
    song.currentTime = progressBar.value;
};