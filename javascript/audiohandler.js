

const NodeID3 = require('node-id3');
var audio = document.getElementById("audio_player");
var queue = []; // All tracks in the queue
var queueIdx = 0;

// Open a file
function audioOpen (fileName) {
    audio.setAttribute("src", fileName);
    let tags = NodeID3.read(fileName);
    console.log("Opening audio, title:" + tags.title + " artist:" + tags.artist + " alb:" + tags.album);
    queue.push({
        title: tags.title == "undefined" ? "Untitled" : tags.title,
        artist: tags.artist == "undefined" ? "Unknown" : tags.artist,
        album: tags.album == "undefined" ? "Unknown Album" : tags.album,
        image: tags.image,
        time: tags.time,
        length: tags.length,
        year: tags.year
    });
}

// Play the audio
function audioPlay() {
    audio.play();
}

// Pause hte audio
function audioPause () {
    audio.pause();
}

// Change of queue index
function queueIdxChange(newidx) {
    queueIdx = newidx;
    currentSongUpdate();
}

// Update the current song, change bg to cover, title change etc.
function currentSongUpdate() {
    var cur = queue[queueIdx];
    document.getElementById("track-title").innerHTML = cur.title;
}