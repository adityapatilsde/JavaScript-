/* checked property is used with checkboxes and radio
 buttons to know whether they are selected or not*/


const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent = "You are subscribed";
    }
    else{
        subresult.textContent = "You are not subscribed"; 
    }
    if(visabtn.checked){
        paymentresult.textContent = "You are paying with visa";
    }
    else if (mastercardbtn.checked){
        paymentresult.textContent = "You are paying with mastercard";
    }
    else if(paypalbtn.checked){
        paymentresult.textContent = "You are playing with PayPal";
    }
    else{
        paymentresult.textContent = "You must select a payment type";
    }
}
