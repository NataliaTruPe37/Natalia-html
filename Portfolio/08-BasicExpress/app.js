const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        res.send("Please enter valid numbers for weight and height.");
    } else {
        const bmi = (weight / (height * height)) * 10000;
        res.send(`Your BMI is ${bmi.toFixed(2)}`);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
