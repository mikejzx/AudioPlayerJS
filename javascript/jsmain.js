
var playing = false;

const electron = require('electron');
const win = electron.remote.getCurrentWindow();
const dialog = electron.remote.dialog;

// For window close button
function onWindowClose() { 
    console.log('window close'); 
    win.close();
}

// For window restore button
function onWindowRestore() { 
    console.log('window restore'); 
    
    if (win.isMaximized()) {
        win.unmaximize();
    }
    else {
        win.maximize();
    }
}

// For window minimise button
function onWindowMinimise() { 
    console.log('window minimise'); 
    win.minimize();
}

function openDevTools() {
    win.openDevTools();
}

// On click of the play/pause button
function trackPlayPause() {
    playing ^= true;
    var state = "Play";
    if (playing) {
        console.log("track play");
        state = "Pause";

        audioPlay();
    }
    else {
        console.log("track pause");
        audioPause();
    }
    document.getElementById('btn_playpause').setAttribute('value', state);
}

// On click of 'previous' button
function trackPrevious() {
    var i = queueIdx - 1;
    if (i > -1) {
        queueIdxChange(i);
        console.log("prev track");
    }
    else {
        console.log("no previous songs");
    }
}

// On click of the 'next track' button
function trackNext() {
    var i = queueIdx + 1;
    if (i < queue.length) {
        queueIdxChange(i);
        console.log("next track");
    }
    else {
        console.log("no more songs in queue");

        // TODO: Restart if 'repeat queue'
    }
}

function openFileDialog () {
    dialog.showOpenDialog({
        title: 'Open file',
        properties: [
            'openFile',
            'multiSelections',
        ],
        filters: [
            { name: 'MP3', extensions: ['mp3'] },
            { name: 'Wave', extensions: ['wav'] },
            { name: 'Ogg Vorbis', extensions: ['ogg']},
            { name: 'VLC Playlist', extensions: ['xspf'] }
        ]
    }, function(filePaths, bookmarks) {
        if (filePaths == null) { return; }
        // TODO: ADD ADDITIONAL FILES INTO QUEUE
        audioOpen(filePaths[0]);
    });
}