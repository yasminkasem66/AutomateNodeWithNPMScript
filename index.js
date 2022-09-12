"use strict";
const express = require('express');
const path = require('path');
const app = express();
// const port = process.env.PORT || 5000;
const port = process.env.npm_package_config_port || 5000;
app.use(express.static(path.resolve(`${__dirname}`, './')));
app.get('/x', (req, res) => {
    console.log("sdfgssd");
    res.send('Yasssssssssssssssmin');
});
const server = app.listen(port, () => console.log(`Server is listening on port ${port} yasmin helwaa gdn...`));
module.exports = server;
// npm script is a tool to help automate 
// how to create and use some basics scripts 
// life cycle scripts vs custom scripts 
// life cycle scripts=> test, start , stop  , pre post
// custom scripts  => any others
// "build": "webpack",
// "prestart": "npm run build",
// "start": " node dist/app.js",
