
var playing = false;

// For window close button
function onWindowClose() { console.log('window close'); }

// For window restore button
function onWindowRestore() { console.log('window restore'); }

// For window minimise button
function onWindowMinimise() { console.log('window minimise'); }

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