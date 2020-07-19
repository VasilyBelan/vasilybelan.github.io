const requestURL = '/scoots/data/rentals.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const rentalType = jsonObject['rentalType'];

        for (let i = 0; i < rentalType.length; i++ ) {
            let rental = document.createElement('section');
            let name = document.createElement('h2');
            let maxPersons = document.createElement('p');
            let reservHalfDay = document.createElement('p');
            let reservFullDay = document.createElement('p');
            let walkInHalfDay = document.createElement('p');
            let walkInFullDay = document.createElement('p');
            let photo = document.createElement('img');
    
            name.textContent = rentalType[i].name;
            maxPersons.textContent = 'Max. persons: ' + rentalType[i].maxPersons;
            reservHalfDay.textContent = 'Reservation half day (3 hrs): ' + rentalType[i].reservHalfDay;
            reservFullDay.textContent = 'Reservation full day: ' + rentalType[i].reservFullDay;
            walkInHalfDay.textContent = 'Walk-In half day (3 hrs): ' + rentalType[i].walkInHalfDay;
            walkInFullDay.textContent = 'Walk-In full day: ' + rentalType[i].walkInFullDay;
            photo.setAttribute('src', rentalType[i].imageurl);
            photo.setAttribute('alt', rentalType[i].name + " photo ");

            rental.appendChild(name);
            rental.appendChild(maxPersons);
            rental.appendChild(reservHalfDay);
            rental.appendChild(reservFullDay);
            rental.appendChild(walkInHalfDay);
            rental.appendChild(walkInFullDay);
            rental.appendChild(photo);
            document.querySelector('div.rental').appendChild(rental);
        }
      });