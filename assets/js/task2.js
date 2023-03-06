
//prompt user to enter a letter
let userInput = prompt("Please enter a letter.");
//create a function to decide whether character is vowel or consonant 
const value = function(userInput){
    //if user input is a, e, i, o or u alert user that vowel has been entered
    if (userInput == "a"|| userInput == "e" || userInput == "i" || userInput == "o"|| userInput == "u" ||userInput == "A"|| userInput == "E" || userInput == "I" || userInput == "O"|| userInput == "U") {
        alert("You have entered a vowel");
        //reload the page
        location.reload();
        //if the letter entered is not a vowel, alert the user the have entered a consonant 
     } else if 
        (userInput !== "a" || userInput !== "e" || userInput !== "i" || userInput !== "o"|| userInput !== "u" || userInput !== "A" || userInput !== "E" || userInput !== "I" || userInput !== "O"|| userInput !== "U" && userInput.test(char) === true) {   
        alert("You have entered a consonant");
        //reload the page
        location.reload();
        //if the character entered is not a letter then alert the user and ask to enter a letter again
    } else {
        alert("Your entry was not a letter.")
        location.reload();
    }
};
//call the function
value(userInput);