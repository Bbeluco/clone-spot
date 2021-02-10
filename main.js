const {app, BrowserWindow, webContents} = require('electron');


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
    })
}

mainWindow = createWindow();

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