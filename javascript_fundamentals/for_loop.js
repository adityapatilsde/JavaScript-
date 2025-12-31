// For loop = repeat some code a Limited amount of times
/* 1. INITIALIZATION
   2. CONDITION
   3.INCREMENT/DECREMENT */
//=================================================================================================
//CODE 1.

for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log("HAPPY NEW YEAR!");

//=================================================================================================
//CODE 2. continue property in for loop

for(let i = 1; i <= 20; i++){

    if(i == 13){
        continue; // helps to skip iteration (13) in the loop
    }
    else{
         console.log(i);
    }
}

//==================================================================================================
//CODE 3. break property in for loop

for(let i = 1; i <= 20; i++){

    if(i == 13){
        break;// breaks the loop when we reach 13 in the number list output shows till 1 to 12 only
    }
    else{
         console.log(i);
    }
}
//===================================================================================================