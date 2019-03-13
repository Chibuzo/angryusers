const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const Renderer = require('./render');


app.get('/', async function (req, res) {
    const param = { title: 'AngryUsers - Home', desc: 'Public Compilation of angry users stories', img: '' };
    try {
        const result = await Renderer.render(param);
        res.send(result);
    } catch (err) {
        console.log(err)
    };
});


app.get('/complaint/:id/:title', async function (req, res) {
    const param = { title: req.params.title, desc: '', img: '' };
    try {
        const result = await Renderer.render(param);
        res.send(result);
    } catch (err) {
        console.log(err)
    };
});


app.get('/blog/:id/:title', async function (req, res) {
    const param = { title: req.params.title, desc: '', img: '' };
    try {
        const result = await Renderer.render(param);
        res.send(result);
    } catch (err) {
        console.log(err)
    };
});

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', function (req, res) {
    const filePath = path.resolve(__dirname, '../build', 'index.html');
    res.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));