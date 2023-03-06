//prompt user for measurement in centimeters 
let userInput = prompt("Please enter a length in centimeters.");
//create a function that will convert the centimeter value to inches 
const inInches = function(userInput){
    //create a variable to hold the new value
    let inch = userInput * 0.393701;
        //display rounded results in an alert window
        alert("The length in inches is " + Math.floor(inch));
            //restart the function
            location.reload();
}
//call the function
inInches(userInput);