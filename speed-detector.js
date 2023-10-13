let prompt = require('prompt-sync')();
//get input from the user.
let speedCar = prompt('What is the car speed? ');

//define the variables speed, speedlimit, demeritpoints
let speed = 70;
let SpeedPerKm = 5;
let maxDemerit = 12;

function calculatespeed (speedLimit){
    //If the speed is less than 70, it should print “Ok”.
    if (speedLimit <= speed) {
        console.log("Ok");
     // No demerit points if speed is within the limit.
    }    else {
        const carspeedLimit = speedLimit  - speed;
        const demeritPoints = Math.floor(carspeedLimit / SpeedPerKm);

        // if it is more than 12 point to output license suspended

    if (demeritPoints > maxDemerit) {
    console.log("License suspended");
   
    } else {
    console.log("Points: " + demeritPoints);
    
    }   
    }
    }


calculatespeed(speedCar)