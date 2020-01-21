const electron = require('electron');
const path = require('path');
const url = require('url');

const batchFolder = './batchFiles/';
const fs = require('fs');

const { app, BrowserWindow } = electron;

let mainWindow;

async function loadFiles() {
  await fs.readdir(batchFolder, (err, files) => {
    let actionList = files.map((file) => {
      return {
        program: app.getAppPath() + './batchFiles/' + file,
        title: file.substring(0, file.indexOf('.'))
      };
    });

    app.setUserTasks(actionList);
  });
}

// Listen for app to be ready
app.on('ready', function() {
  loadFiles();

  mainWindow = new BrowserWindow({});

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'mainWindow.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  mainWindow.on('closed', function() {
    app.quit();
  });
});
