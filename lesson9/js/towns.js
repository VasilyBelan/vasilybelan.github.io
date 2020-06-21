const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const cities = jsonObject['towns'];

        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name == "Preston" || cities[i].name == "Fish Haven" || cities[i].name == "Soda Springs") {
                let card = document.createElement('cities');
                card.setAttribute('class', 'city')
                let photo = document.createElement('img');
                let name = document.createElement('h1');
                let motto = document.createElement('h2');
                let yearFounded = document.createElement('h3');
                let currentPopulation = document.createElement('h4');
                let averageRainfall = document.createElement('h5');

                //Main
                photo.setAttribute('src', 'images/' + cities[i].photo);
                photo.setAttribute('alt', cities[i].name);
                name.textContent = cities[i].name;
                motto.textContent = cities[i].motto;
                yearFounded.textContent = 'Date of establishment: ' + cities[i].yearFounded;
                currentPopulation.textContent = "Population: " + cities[i].currentPopulation;
                averageRainfall.textContent = 'Annual rain rainfall: ' + cities[i].averageRainfall;

                card.appendChild(photo);
                card.appendChild(name);
                card.appendChild(motto);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                document.querySelector('div.cards').appendChild(card);
            }
        }
    });