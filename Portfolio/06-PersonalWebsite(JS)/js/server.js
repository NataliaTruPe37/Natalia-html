document.getElementById('name').addEventListener('click', () => {
    const newName = prompt("Enter your new name:");
    if (newName) {
        document.getElementById('name').textContent = newName;
    }
});

document.getElementById('add-skill').addEventListener('click', () => {
    const newSkill = prompt("Enter a new skill:");
    if (newSkill) {
        const skillList = document.getElementById('skills-list');
        const newLi = document.createElement('li');
        newLi.textContent = newSkill;
        skillList.appendChild(newLi);
    }
});

document.getElementById('remove-food').addEventListener('click', () => {
    const foodList = document.getElementById('favorite-food');
    if (foodList.lastChild) {
        foodList.removeChild(foodList.lastChild);
    }
});
const destinations = [
    {
        city: "Vancouver",
        country: "Canada",
        flag: "IMG/products-1619_Canadian-Flag.jpg",
        population: "2.6 million",
        description: "Vancouver blends nature and modernity seamlessly...",
        image: "IMG/Vancouver.jpg",
    },
    {
        city: "New York",
        country: "USA",
        flag: "IMG/USA FLAG.jpg",
        population: "8.8 million",
        description: "New York City dazzles with its dynamic energy...",
        image: "IMG/NEW YORK.jpg",
    },
    {
        city: "Peru",
        country: "South America",
        flag: "IMG/peru-flag.jpg",
        population: "34 million",
        description: "Peru is a land of striking contrasts and rich heritage...",
        image: "IMG/Peru.jpeg",
    },
    {
        city: "Japan",
        country: "East Asia",
        flag: "IMG/JAPAN FLAG.jpeg",
        population: "124 million",
        description: "Japan offers a captivating blend of tradition and modernity...",
        image: "IMG/Japan.avif",
    },
    {
        city: "Iceland",
        country: "North Atlantic Ocean",
        flag: "IMG/icelandflag.webp",
        population: "380,000",
        description: "Iceland is known for its stunning and diverse landscapes...",
        image: "IMG/iceland.jpeg",
    }
];

const container = document.getElementById('destinations-container');
destinations.forEach(dest => {
    const destDiv = document.createElement('div');
    destDiv.innerHTML = `
        <h1><b>City:</b> ${dest.city}</h1>
        <h1><b>Country:</b> ${dest.country}</h1>
        <img src="${dest.flag}" alt="${dest.country} flag" class="flag" style="border-radius: 20px;"/>
        <h1><b>Population:</b> ${dest.population}</h1>
        <p>${dest.description}</p>
        <img src="${dest.image}" alt="${dest.city}" class="city" style="border-radius: 20px;"/>
        <hr>
    `;
    container.appendChild(destDiv);
});
