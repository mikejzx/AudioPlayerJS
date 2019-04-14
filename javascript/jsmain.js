
var playing = false;

const win = require('electron').remote.getCurrentWindow();

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

// On click of 'previous' button
function trackPrevious() {
    console.log("trackprevious");
}

// On click of the play/pause button
function trackPlayPause() {
    playing ^= true;
    var state = "Play";
    if (playing) {
        console.log("track play");
        state = "Pause";
    }
    else {
        console.log("track pause");
    }
    document.getElementById('btn_playpause').setAttribute('value', state);
}

// On click of the 'next track' button
function trackNext() {
    console.log("track next");
}