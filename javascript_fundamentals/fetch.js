/* FETCH = function used for making http requests to fetch resources 
   (JSON style data , images , files )
   simplifies asynchronous data fetching in javscript and used for 
   interacting with APIS to retrieve and send data asynchronous over the web .
   fetch (url , {options}) */
   //CODE 1
/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(response => {

           if(!response.ok){
            throw new Error("could not fetch resource");
           }

           return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  */    

//============================================================================================
//CODE 2.

fetchData();
async function fetchData (){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");


        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch (error){
        console.error(error);

    }

}

//====================================================================================================