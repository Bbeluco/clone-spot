const {app, BrowserWindow} = require('electron');
const request = require('request');
require('dotenv').config();

(function getPlaylist(){
    const urlPlaylist = "https://api.spotify.com/v1/me/playlists";
    const token = 'Bearer ' + process.env.TOKEN
    console.log(token)
    request({url: urlPlaylist, method: 'GET', headers: {'Authorization': token, 'Content-Type': 'application/json'}},
        function (error, response, body) {
            const result = JSON.parse(body)
            for(i=0; i < result.items.length; i++) {
                console.log(result.items[i].name)
            }
        })
})()



//Configurações do Electron
function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        heigth: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(createWindow);

app.on('window-all-close', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(BrowseWindow.getAllWindows().length === 0) {
        createWindow()
    }
})