
let userInput = prompt("Please enter a letter.");
const value = function(userInput){
    if (userInput == "a"|| userInput == "e" || userInput == "i" || userInput == "o"|| userInput == "u") {
        alert("You have entered a vowel");
        return;
     } else if 
        (userInput !== "a" || userInput !== "e" || userInput !== "i" || userInput !== "o"|| userInput !== "u" && userInput.test(char) == true) {   
        alert("You have entered a consonant");
        return;
    } else {
        alert("Please enter a letter.")
        location.reload();
    }
};
value(userInput);










/*
let userInput = prompt("Please enter a letter.");
function character(userInput){
    if (userInput ="a"|| userInput === "e" || userInput === "i" || userInput === "o"|| userInput === "u") {
        alert("You have entered a vowel");
     } else 
        alert("You have entered a consonant");
    };

    character();

*/