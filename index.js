
const url = require('url');
const path = require('path');
const { dialog, app, BrowserWindow } = require('electron');

let mainwnd;

app.on('ready', () => {
    mainwnd = new BrowserWindow({
        width: 600,
        height: 400
    });
    mainwnd.loadURL(url.format({
        pathname: path.join(__dirname, 'mainwnd.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainwnd.on('close', () => {
        app.exit();
        mainwnd = null;
    })

    // Test dialog
    /*dialog.showOpenDialog({
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
    });*/
});
