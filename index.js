const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Report crashes to electron server.
//electron.crashReporter.start();

var mainWindow = null;

app.on('window-all-closed', function() {

  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    "node-integration": "iframe",
    "web-preferences": {
      "web-security": false,
      "allowDisplayingInsecureContent": true
    }
  });

  mainWindow.loadURL('https://trello.com/login');

  mainWindow.on('closed', function() {

    mainWindow = null;
  });
});
