function oneTime(){
    console.log("I will execute one time only");
}

var t = 10;
function multTime(t){
    console.log("I will execute " + t + " times");
}

function zeroTime(){
    console.log("I will not execute");
}

oneTime();

for (var k = 0; k < t; k++){
    multTime(t);
}