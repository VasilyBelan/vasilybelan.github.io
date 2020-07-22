const url = 'https://api.openweathermap.org/data/2.5/weather?q=Cozumel,mx&units=imperial&APPID=9de8eee9a4c64441c46ceb33e731a8a3';
fetch(url)
.then((response) => response.json())
.then((Cozumel) => {
  console.log(Cozumel);
  
document.getElementById('current').textContent = Math.round(Cozumel.main.temp);
document.getElementById('hum').textContent = Cozumel.main.humidity;
document.getElementById('condition').textContent = Cozumel.weather[0].main;



});

function getFive(x) {
  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + x + "&units=imperial&appid=9de8eee9a4c64441c46ceb33e731a8a3";
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      var x = '18:00:00';
      let fiveDay = document.getElementById('fiveDay').childNodes;
      console.log(fiveDay);
      let forecast = jsObject.list.filter((time) => {
        return (time.dt_txt.includes(x));
      });
      console.log(forecast);     
      let n = 0;
      for(let i = 1; i<=9; i+=2) {
        fiveDay[i].childNodes[5].textContent = Math.round(forecast[n].main.temp) + "℉";
        let imgsrc = 'https://openweathermap.org/img/wn/' + forecast[n].weather[0].icon + '@2x.png';
        let desc = forecast[n].weather[0].description;
        fiveDay[i].childNodes[3].childNodes[1].setAttribute('src', imgsrc);
        fiveDay[i].childNodes[3].childNodes[1].setAttribute('alt', desc);
        n++;
      }

  });
} 

function forecast() {
  var today = new Date();
  const fday = ['Sunday', 'Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday', 'Saturday '];
  var nday =  today.getDay();

  document.getElementById('day1').textContent = fday[nday];

  let a = document.getElementById('day2');
  let b = document.getElementById('day3');
  let c = document.getElementById('day4');
  let d = document.getElementById('day5');

  const forecast = [a, b, c, d];

  let x = (nday + 1);
  let looped = 0;

  for(let i = 0; i < forecast.length; i++) {
      if(x <= 6) {
          console.log(fday[x])
          forecast[i].textContent = fday[x];
          x++;
      }
      else if (x > 6) {
          console.log(fday[looped])
          forecast[i].textContent = fday[looped];
          looped++;
      }
  }
       
}


/*function initMapCentro () {
  var locCentro = {lat: 20.510, lng: -86.9491};
  var locTerminal = {lat: 29.7070, lng: -80.9491};
  var mapCentro = new google.maps.Map(
      document.getElementById('mapCentro'), {zoom: 7, center: locCentro});
  var mapTerminal = new google.maps.Map(
    document.getElementById('mapTerminal'), {zoom: 7, center: locTerminal});
      if(x="mapTerminal")
        
      {
        var marker = new google.maps.Marker({position: locCentro, mapCentro: mapCentro});
      }
      else
      {
        var marker = new google.maps.Marker({position: locTerminal, mapCentro: mapTerminal});
      }
      }*/
      function initMapCentro (x) {
        if(x=1){
        var uluru = {lat: 29.7070, lng: -80.9491};
        var map = new google.maps.Map(
          document.getElementById('mapCentro'), {zoom: 9, center: uluru});
        var marker = new google.maps.Marker({position: uluru, map: map});
        }
        else if(x=2){
          var uluru = {lat: 35.7070, lng: -70.9491};
          var map = new google.maps.Map(
          document.getElementById('mapTerminal'), {zoom: 9, center: uluru});
          var marker = new google.maps.Marker({position: uluru, map: map});
        }
        }





      /*function initMapTerminal () {
        var uluru = {lat: 35.7070, lng: -70.9491};
        var map = new google.maps.Map(
        document.getElementById('mapTerminal'), {zoom: 9, center: uluru});
        var marker = new google.maps.Marker({position: uluru, map: map});
        }*/

  