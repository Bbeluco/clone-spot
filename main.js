const {app, BrowserWindow, webContents} = require('electron');
const request = require('request');
require('dotenv').config();

(function getPlaylist(){
    const urlPlaylist = "https://api.spotify.com/v1/me/playlists";
    const token = 'Bearer ' + process.env.TOKEN;
    request({url: urlPlaylist, method: 'GET', headers: {'Authorization': token, 'Content-Type': 'application/json'}},
    function (error, response, body) {
        if(error) return;
        const result = JSON.parse(body);
        for(i=0; i < result.items.length; i++) {
            
        }
    });
})();

function createPlaylistName(name){
    const playlist = document.querySelector('#playlist');
    const a = document.createElement('a');
    a.innerHTML = name;
    a.className = 'bar-library btn';
    playlist.appendChild(a)
    
}


//Configurações do Electron
let mainWindow;
function createWindow(){
    app.on('ready', () => {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            frame: true,
            webPreferences: {
                nodeIntegration: true
            }
        });
        mainWindow.loadURL('file://' + __dirname + '/index.html');
        return mainWindow;
    })
}

mainWindow = createWindow();
console.log(mainWindow.webContents)

app.on('window-all-close', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(BrowseWindow.getAllWindows().length === 0) {
        createWindow();
    }
})