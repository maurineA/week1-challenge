
let prompt = require('prompt-sync')();
//get input from the user.
let studentGrade = prompt('What grade did the student get? ');

// The input should be between 0 and 100

let studentsMarks= (score) =>{
   // A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
    if (score >= 79 && score <=100){
    console.log("A");
    } else if (score >= 60 && score <= 79){
    console.log("B")

    } else if (score >=49 && score <= 59){
    console.log("C")

    } else if (score >= 40 && score <= 49){
    console.log("D")

    }  else if (score <= 40 && score >=0){
    console.log("E")

    } 
    else{
    console.log("Sorry input the right Grade")
     }
    }


    studentsMarks(studentGrade);