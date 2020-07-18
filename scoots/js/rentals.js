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
    
            //Create content
            name.textContent = 'Rental Type: ' + rentalType[i].name;
            maxPersons.textContent = 'Max. Persons: ' + rentalType[i].maxPersons;
            reservHalfDay.textContent = 'Reservation Half Day (3 hrs): ' + rentalType[i].reservHalfDay;
            reservFullDay.textContent = 'Reservation Full Day: ' + rentalType[i].reservFullDay;
            walkInHalfDay.textContent = 'Walk-In Half Day (3 hrs): ' + rentalType[i].walkInHalfDay;
            walkInFullDay.textContent = 'Walk-In Full Day: ' + rentalType[i].walkInFullDay;
    
            //Put elements in each
            rental.appendChild(name);
            rental.appendChild(maxPersons);
            rental.appendChild(reservHalfDay);
            rental.appendChild(reservFullDay);
            rental.appendChild(walkInHalfDay);
            rental.appendChild(walkInFullDay);
            document.querySelector('div.rental').appendChild(rental);
        }
      });