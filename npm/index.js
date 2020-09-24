let express = require('express');

let app = express();


/// відправка стрічки на сторінку

// app.get('/', function(req, res) {
//     res.send('hello')                   /// відправка інфи на сторінку
// })

// app.get('/about', function(req, res) {
//     res.send('hello about')                   /// відправка інфи на сторінку about
// })

// app.get('/news', function(req, res) {
//     res.send('hello news')                   /// відправка інфи на сторінку news
// })

// app.get('/news/:id/:type', function(req, res) {

//     // console.log(req.params)
//     // console.log(req)
//     res.send('hello news by id ' + req.params.type)                   /// відправка інфи на сторінку news by id
// })

// app.listen(3000);



/// відправка файла на сторінку

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')                   /// відправка файлу на сторінку
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/about.html')                   /// відправка файлу на сторінку
})

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html')                   /// відправка файлу на сторінку
})

app.listen(3000);