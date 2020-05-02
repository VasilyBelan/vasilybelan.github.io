var lastUpdate = document.lastModified
document.getElementById('lastUpdate').innerHTML = 'Last Update '+ lastUpdate
var year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();