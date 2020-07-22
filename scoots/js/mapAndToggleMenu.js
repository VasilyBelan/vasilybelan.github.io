function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}
var lastUpdate = document.lastModified

function initMapCentro() {
    var locations = [
      ['Av Lic Benito Juárez 9, Centro, 77600 San Miguel de Cozumel, Q.R., Mexico', 20.511164, -86.949251, 2],
      ['Carr. Chancanab Km. 4.5, Carretera Costera Sur, Centro, 77600 San Miguel de Cozumel, Q.R., Mexico', 20.477030, -86.974670, 1]
    ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(20.467067, -86.925018),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        title: 'Click to visit our company on Google Places'
      });
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }     
    }