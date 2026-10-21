const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.listen(port, ()=>{
    console.log(`APP RUNNING ON http://localhost:${port}`);
})