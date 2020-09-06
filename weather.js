const weather = document.querySelector(".js-weather");
const API_KEY = "d789984f9d0d177bb11bce0fe05739fe";
const COORDS = 'coords';

function getweather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
.then(function(response){
    return response.json()
})
.then(function(json){
   const temp = json.main.temp;
   const place = json.name;
   weather.innerText = `${temp}℃ @ ${place}`;
});
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleError(){
    alert("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getweather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();
