//How to accept user input
//1. Easy way = window prompt
//2. professional way = html textbox
//1.
let username;

username = window.prompt("What ur username");
console.log(username);

//2.
let username1;
document.getElementById("mysubmit").onclick = function() {
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Hello ${username}`
}