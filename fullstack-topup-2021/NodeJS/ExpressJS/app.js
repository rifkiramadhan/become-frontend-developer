const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => {
    const buah = [
        {name : 'apel'},
        {name : 'melon'},
        {name : 'manggah'},
        {name : 'jeruk'}
    ]
    res.render('index', {
        name: 'Rifki Ramadhan',
        umur: 22,
        buah: buah
    })
})
app.get('/:name', (req, res) => res.send(`Nama Saya : ${req.params.name}`))

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})