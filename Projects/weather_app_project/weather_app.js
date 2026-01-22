//WHATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityinput = document.querySelector(".cityInput");
const card = document.querySelector(".card")
const apiKey = "2cbf8aec1a93ed8c1a8c3a5248cb4f7a";

weatherForm.addEventListener("submit", async event => {
     
     event.preventDefault();

     const city = cityinput.value;

     if(city){
         try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
         }
         catch(error){
            console.error(error);
            displayError(error);
         }
     }
     else{
        displayError("Please enter a city");
     }
});

async function getWeatherData(city) {
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not ftech weather data")
    }

    return await response.json();

}
function displayWeatherInfo(data){
    const {name: city,
        main:{temp , humidity},
        weather: [{description, id}]} = data;

        //destructuring from the api link  >> console log >> properties
        card.textContent = "";
        card.style.display = "flex";

        const cityDisplay = document.createElement("h1");
          const tempDisplay = document.createElement("p");
            const humidityDisplay = document.createElement("p");
              const descDisplay = document.createElement("p");
                const WeatherEmoji = document.createElement("p");
                  

                cityDisplay.textContent = city;
                tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
                humidityDisplay.textContent = `humidity: ${humidity}%`;
                descDisplay.textContent = description;
                WeatherEmoji.textContent = getWeatherEmoji(id);

                cityDisplay.classList.add("cityDisplay");
                tempDisplay.classList.add("tempDisplay");
                humidityDisplay.classList.add("humidityDisplay");
                descDisplay.classList.add("descDisplay");
                WeatherEmoji.classList.add("weatherEmoji");

                card.appendChild(cityDisplay);
                card.appendChild(tempDisplay);
                card.appendChild(humidityDisplay);
                card.appendChild(descDisplay);
                card.appendChild(WeatherEmoji);
}
function getWeatherEmoji(weatherId){
     switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
             case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
             case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
             case (weatherId >= 600 && weatherId < 700):
            return "❄️";
             case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
             case (weatherId === 800):
            return "🌞";
             case (weatherId >= 801 && weatherId < 810):
            return "☁️";
            default:
                return "❓";
     }
}
function displayError(message){
      const errorDisplay = document.createElement("p");
      errorDisplay.textContent = message;
      errorDisplay.classList.add("eroorDisplay");

      card.textContent = "";
      card.style.display = "flex";
      card.appendChild(errorDisplay);
}