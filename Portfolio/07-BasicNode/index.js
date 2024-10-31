console.log("Hello, World!");

const sw = require('star-wars-quotes');
console.log("Star Wars quote library loaded.");
console.log(sw());

const superheroes = require('superheroes');
const supervillains = require('supervillains');

console.log("Libraries for superheroes and supervillains loaded.");

const hero = superheroes.random();
const villain = supervillains.random();

console.log(`An epic battle between ${hero} and ${villain} begins!`);

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'input.txt');
console.log(`Attempting to read file at: ${filePath}`);

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("Contenido de input.txt:", data);
});
