
let userInput = prompt("Please enter your grade.");
const grade = function(userInput){
    
    if (userInput >= 90 && userInput <= 100){
        alert(`You entered ${userInput}. Your grade is an A.`);
    } else if (userInput >= 80 && userInput < 90){
        alert(`You entered ${userInput}. Your grade is an B.`);
    } else if (userInput >= 70 && userInput < 80){
        alert(`You entered ${userInput}. Your grade is an C.`);
    } else if (userInput >= 60 && userInput < 70){
        alert(`You entered ${userInput}. Your grade is an D.`);
    } else if (userInput >= 0 && userInput < 60) {
        alert(`You entered ${userInput}. Your grade is an E.`);
    } else {
        alert(`Invalid Input`);
            location.reload();
    }
};
grade(userInput);