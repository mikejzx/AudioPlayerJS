

const NodeID3 = require('node-id3');
var audio = document.getElementById("audio_player");
var queue = []; // All tracks in the queue
var queueIdx = 0;

// Open a file
function audioOpen (fileName) {
    let tags = NodeID3.read(fileName);
    console.log("Opening audio, title:" + tags.title + " artist:" + tags.artist + " alb:" + tags.album);

    queue.push({
        filepath: fileName,
        title: tags.title == null ? "Untitled" : tags.title,
        artist: tags.artist == null ? "Unknown Artist" : tags.artist,
        album: tags.album == null ? "Unknown Album" : tags.album,
        image: tags.image, // TODO: Set this to a default if there's no image
        time: tags.time,
        length: tags.length,
        year: tags.year
    });
    queueUpdated();
}

// Play the audio
function audioPlay() {
    audio.play();
}

// Pause hte audio
function audioPause () {
    audio.pause();
}

// Change of queue indexNodeProject
function queueIdxChange(newidx) {
    queueIdx = newidx;
    currentSongUpdate();
}

function queueUpdated() {
    // First song added, open it
    if (queue.length == 1) {
        queueIdxChange(0);
    }
}

// Update the current song, change bg to cover, title change etc.
function currentSongUpdate() {
    var cur = queue[queueIdx];
    updateTitleText(cur.artist + " - " + cur.title);
    audio.setAttribute("src", cur.filepath);
    document.getElementById("track-title").innerHTML = cur.title;
    document.getElementById("track-artist").innerHTML = "by " + cur.artist;
}

// Title should be formatted as:
// Artist name - Track title
function updateTitleText(newTitle) {newTitle + " : AudioPlayerJS"
    var cap = newTitle + " : AudioPlayerJS";
    document.getElementsByTagName("title")[0].innerHTML = cap;
    document.getElementById("captionbar-title").innerHTML = cap;
}