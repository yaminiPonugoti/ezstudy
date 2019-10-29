// // index.js

const http = require('http');
const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || "8000";
var router = express.Router();
//var cookieParser = require('cookie-parser');
//var session = require('express-session');
const util = require('util');
var bodyParser = require('body-parser');
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'welcome.html'));
});
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});