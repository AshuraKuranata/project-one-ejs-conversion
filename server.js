const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(3002, () => {
    console.log('Listening on port 3002')
})

app.get('/', (req, res) => {
    res.render('main.ejs')
})

app.get('/gallery', (req, res) => {
    res.render('gallery.ejs')
})

app.get('/news', (req, res) => {
    res.render('news.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})