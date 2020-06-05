(function () {
    const highT = document.getElementById('highT').innerHTML;
    const windS = document.getElementById('windS').innerHTML;
    let windCH = 35.74 + (0.6215 * highT) - (35.75 * (windS ** .16)) + (0.4275 * highT * (windS ** .16));
    
     
    if (highT <= 50 && windS > 3) {
        windCH = Math.round(windCH) + "&#8457";
    } else {
        windCH = "N/A";
    }
    document.getElementById('windCH').innerHTML = windCH;
  }());