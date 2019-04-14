
var audio = document.getElementById("audio_player");

function audioOpen (fileName) {
    audio.setAttribute("src", fileName);
    console.log("Opening audio");
}

function audioPlay() {
    audio.play();
}

function audioPause () {
    audio.pause();
}