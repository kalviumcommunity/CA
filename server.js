const express = require('express')

const PORT = 5000;

const app = express();

app.get('/',(req,res)=>{
    res.send('task 1: creating server')
})

app.listen(PORT,()=>{
    console.log('http://localhost:5000')
})