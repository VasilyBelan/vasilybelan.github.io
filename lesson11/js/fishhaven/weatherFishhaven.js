const url = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=9de8eee9a4c64441c46ceb33e731a8a3';
fetch(url)
.then((response) => response.json())
.then((fishhaven) => {
  console.log(fishhaven);
  
document.getElementById('current').textContent = Math.round(fishhaven.main.temp);
document.getElementById('highT').textContent = Math.round(fishhaven.main.temp_max);
document.getElementById('hum').textContent = fishhaven.main.humidity;
document.getElementById('windS').textContent = Math.round(fishhaven.wind.speed);
document.getElementById('condition').textContent = fishhaven.weather[0].main;


windChill();
});
 
function windChill (){
  const t = document.getElementById('current').innerHTML;
  const ws = document.getElementById('windS').innerHTML;
  var wc = 35.74 + (0.6215 * t) - (35.75 * (ws ** .16)) + (0.4275 * t * (ws ** .16));
        
  if (t <= 50 && ws > 3) {
     var wc = Math.round(wc) + '°F';
  } 
    else {
     wc = "N/A";
  }
  document.getElementById('windchill').textContent = wc;
};

function getFive(x) {
  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + x + "&units=imperial&appid=9de8eee9a4c64441c46ceb33e731a8a3";
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      var x = '18:00:00';
      let forecast5 = document.getElementById('forecast5').childNodes;
      console.log(forecast5);
      let forecast = jsObject.list.filter((time) => {
        return (time.dt_txt.includes(x));
      });
      console.log(forecast);     
      let n = 0;
      for(let i = 1; i<=9; i+=2) {
        forecast5[i].childNodes[5].textContent = Math.round(forecast[n].main.temp) + "℉";
        let imgsrc = 'https://openweathermap.org/img/wn/' + forecast[n].weather[0].icon + '@2x.png';
        let desc = forecast[n].weather[0].description;
        forecast5[i].childNodes[3].childNodes[1].setAttribute('src', imgsrc);
        forecast5[i].childNodes[3].childNodes[1].setAttribute('alt', desc);
        n++;
      }

  });
} 
