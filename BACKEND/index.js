
const express = require('express')
const app = express()

const port = 8000

app.get('/',(req, res) => { 
    res.send('Hello Wordl!')
})

app.listen(port, ()=>{
    console.log(`Example app listenign on port ${port}`)
})