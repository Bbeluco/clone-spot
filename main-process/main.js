const {app, BrowseWindow} = require('electron');

function createWindow(){
    const win = new BrowseWindow({
        width: 800,
        heigth: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('../index.html')
}

app.whenReady().then(createWindow());

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