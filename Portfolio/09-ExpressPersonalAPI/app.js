const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let names = [];
let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { names, tasks, error: null });
});

app.get('/greet', (req, res) => {
    const name = req.query.name;
    if (name) {
        names.push(name);
        console.log(`Name received: ${name}`);
    }
    res.render('index', { names, tasks, error: null });
});

app.get('/greet/:name', (req, res, next) => {
    const name = req.params.name;
    if (names.includes(name)) {
        res.render('wazzup', { name });
    } else {
        next(new Error("The name doesn't exist in the list"));
    }
});

app.use((err, req, res, next) => {
    res.render('index', { names, tasks, error: err.message });
});

app.post('/task', (req, res) => {
    const task = req.body.task;
    if (task) {
        tasks.push(task);
    }
    res.redirect('/');
});

app.get('/task', (req, res) => {
    res.json(tasks);
});

app.delete('/task/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    }
    res.redirect('/');
});

app.put('/greet/:name', (req, res) => {
    const name = req.params.name;
    if (name && !names.includes(name)) {
        names.push(name);
    }
    res.json(names);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
