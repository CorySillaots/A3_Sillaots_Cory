
let userInput = prompt("Please enter a letter.");
const value = function(userInput){
    if (userInput == "a"|| userInput == "e" || userInput == "i" || userInput == "o"|| userInput == "u" ||userInput == "A"|| userInput == "E" || userInput == "I" || userInput == "O"|| userInput == "U") {
        alert("You have entered a vowel");
        location.reload();
     } else if 
        (userInput !== "a" || userInput !== "e" || userInput !== "i" || userInput !== "o"|| userInput !== "u" || userInput !== "A" || userInput !== "E" || userInput !== "I" || userInput !== "O"|| userInput !== "U" && userInput.test(char) === true) {   
        alert("You have entered a consonant");
        location.reload();
    } else {
        alert("Please enter a letter.")
        location.reload();
    }
};
value(userInput);