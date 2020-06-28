const apiURL = "9de8eee9a4c64441c46ceb33e731a8a3";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });