//DICE ROLL PROGRAM

function rolldice(){
    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for(let i = 0; i < numofdice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="assets/dice_${value}.jpg" width="100">`);
}

    diceresult.textContent = `dice: ${values.join(`, `)}`;
    diceimages.innerHTML = images.join(``);

}