//IF statements

//1st ex code=====================================================

let age = 13;
if(age >= 18){
console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}
//=========================================================================

//2nd code

let time = 14;
if(time < 12 ){
    console.log("Good Morning");
}
else{
    console.log("Good evening");
}

//==============================================================================

//3rd code

let isStudent = false;
if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are not a student");
}

//===========================================================================

//4th code

let agelimit = 25;
let haslicense = true;

if(agelimit >= 16){
    console.log("You are old enough to drive");

    if(haslicense){
        console.log("You have your license");
    }
    else{
        console.log("You do not have your license");
    }
}
else{
    console.log("You must be 16= to have a license ");
}

//====================================================================================

//5th code
const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");
let ageis;

mysubmit.onclick = function(){

ageis = mytext.value;
ageis = Number(ageis);

if(ageis >= 100){
    resultelement.textContent ="You are too old to enter this site ";
}
else if (ageis == 0 ){
    resultelement.textContent = "You cant enter you are just born";
}
else if(ageis >= 18) {
    resultelement.textContent = "You are old enough to enter this site";
}
else if(ageis < 0){
    resultelement.textContent = "Your age can't be less than 0";
}

else{
    resultelement.textContent = "You must me 18+ to enter this site";
}

}


//else if used if we want to check other statements after (if statement) before jumping on (else statement )
