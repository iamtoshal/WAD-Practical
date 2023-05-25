//Import the express package
const express = require("express");

//Create an instance of Express
const app = express();
const port = 5000;
const path = require('path');

app.listen(port, () => {
    console.log(`App is running on the port ${port}`);
})

app.use(express.static(path.join(__dirname, 'public')));


