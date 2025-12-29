//counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const dinmeipaisadouble = document.getElementById("21dinmeipaisadouble");
const Countlabel = document.getElementById("Countlabel");

let count = 0;
let secondcount=1;

increaseBtn.onclick = function() {
    count++;
    Countlabel.textContent = count;
}
decreaseBtn.onclick = function() {
    count--;
    Countlabel.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    Countlabel.textContent = count;
}


