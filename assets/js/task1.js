let userInput = prompt("Please enter a length in centimeters.");
const inInches = function(userInput){
    let inch = userInput * 0.393701;
        alert("The length in inches is " + Math.floor(inch));
}
inInches(userInput);







/*if (userInput != NaN) {
    const inches = function(userInput){
        userInput * 0.393701;
    };
    window.alert(`The length in inches is ${inches}`);
        } else {
            window.alert("Your entry was not a number. Please try again");
                location.reload();
        }
    
;
    
   */ 