const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
const pages = "file://" + __dirname + "/static/pages/";
const stylesheets = "file://" + __dirname + "/static/stylesheets/";
var style = require('./static/stylesheets/style.json');
var mainWindow = null;

app.on('ready', function () {
  console.log(style.colors.primary);
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    backgroundColor: style.colors.base1
  });
  mainWindow.loadURL(pages + "index.html");
})
