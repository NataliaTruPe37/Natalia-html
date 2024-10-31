const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de body-parser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir el archivo index.html en la ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar el formulario y calcular el BMI
app.post('/', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    if (isNaN(weight) || isNaN(height) || height === 0) {
        res.send("Please enter valid numbers for weight and height.");
    } else {
        const bmi = (weight / (height * height)) * 10000;
        res.send(`Your BMI is ${bmi.toFixed(2)}`);
    }
});

// Escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
