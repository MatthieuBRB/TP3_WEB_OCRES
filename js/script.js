
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();

  // Appel de la fonction fetchTodayForecast
  apiWeather
    .fetchTodayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });


  apiWeather
    .fetch3DaysForecast()
    .then(function (response) {
      // Récupère les données d'une API
      const data = response.data;

      // Tableaux pour stocker les informations principales
      const main = [];
      const description = [];
      const temp = [];
      const icon = [];

      // On remplit chaque tableau avec les données correspondantes (un index de tableau = un jour différent)
      for(var i = 0; i<3; i++) {
        main.push(data.list[i].weather[0].main);
        description.push(data.list[i].weather[0].description);
        temp.push(data.list[i].temp.day);
        icon.push(apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon));
      }

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main[0];
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description[0];
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon[0];
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp[0]}°C`;

      document.getElementById('after-tomorrow-forecast-main').innerHTML = main[1];
      document.getElementById('after-tomorrow-forecast-more-info').innerHTML = description[1];
      document.getElementById('after-tomorrow-icon-weather-container').innerHTML = icon[1];
      document.getElementById('after-tomorrow-forecast-temp').innerHTML = `${temp[1]}°C`;

      document.getElementById('again-tomorrow-forecast-main').innerHTML = main[2];
      document.getElementById('again-tomorrow-forecast-more-info').innerHTML = description[2];
      document.getElementById('again-tomorrow-icon-weather-container').innerHTML = icon[2];
      document.getElementById('again-tomorrow-forecast-temp').innerHTML = `${temp[2]}°C`;

    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}

function update() {
  var city = document.getElementById('city-input').value;
  const apiWeatherUpdate = new API_WEATHER(city);

  apiWeatherUpdate
    .fetchTodayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeatherUpdate.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });

    apiWeatherUpdate
    .fetch3DaysForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // Tableaux pour stocker les informations principales
      const main = [];
      const description = [];
      const temp = [];
      const icon = [];

      // On remplit chaque tableau avec les données correspondantes (un index de tableau = un jour différent)
      for(var i = 0; i<3; i++) {
        main.push(data.list[i].weather[0].main);
        description.push(data.list[i].weather[0].description);
        temp.push(data.list[i].temp.day);
        icon.push(apiWeatherUpdate.getHTMLElementFromIcon(data.list[i].weather[0].icon));
      }

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main[0];
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description[0];
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon[0];
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp[0]}°C`;

      document.getElementById('after-tomorrow-forecast-main').innerHTML = main[1];
      document.getElementById('after-tomorrow-forecast-more-info').innerHTML = description[1];
      document.getElementById('after-tomorrow-icon-weather-container').innerHTML = icon[1];
      document.getElementById('after-tomorrow-forecast-temp').innerHTML = `${temp[1]}°C`;

      document.getElementById('again-tomorrow-forecast-main').innerHTML = main[2];
      document.getElementById('again-tomorrow-forecast-more-info').innerHTML = description[2];
      document.getElementById('again-tomorrow-icon-weather-container').innerHTML = icon[2];
      document.getElementById('again-tomorrow-forecast-temp').innerHTML = `${temp[2]}°C`;

    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}
