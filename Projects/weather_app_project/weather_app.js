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
    
    const apiUrl = ``;
}
function displayWeatherInfo(data){

}
function getWeatherEmoji(weatherId){

}
function displayError(message){
      const errorDisplay = document.createElement("p");
      errorDisplay.textContent = message;
      errorDisplay.classList.add("eroorDisplay");

      card.textContent = "";
      card.style.display = "flex";
      card.appendChild(errorDisplay);
}