const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const path = require('path');
const Renderer = require('./render');


app.get('/', async function (req, res) {
    const param = {
        title: "Public Compilation of angry customers/users's stories", 
        desc: "AngryUsers is a bad review platform where customers/users share their bad experience with a brand or an organisation. New customers/users are also encouraged to check up the performance of a brand/organisation before engaging them.", img: '' };
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

app.get('/blog', async function (req, res) {
    const param = {
        title: "Blog Home . AngryUsers",
        desc: "Get updates on recent events relating to customers, brands/organisations etc. AngryUsers also shares her opinions on certain trending or interesting topic going on.", img: ''
    };
    try {
        const result = await Renderer.render(param);
        res.send(result);
    } catch (err) {
        console.log(err)
    };
});


app.get('/blog/:id/:title/:image', async function (req, res) {
    const image = "https://angryusers-blog.s3.amazonaws.com/blog_photos/b_" + atob(req.params.image);
    const param = { title: req.params.title, desc: '', img: image };
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