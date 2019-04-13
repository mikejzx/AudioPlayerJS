
const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

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
});
