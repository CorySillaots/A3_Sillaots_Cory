let userInput = prompt("Please enter a length in centimeters.");
const inInches = function(userInput){
    let inch = userInput * 0.393701;
        alert("The length in inches is " + Math.floor(inch));
            location.reload();
}
inInches(userInput);