//Variables
var number1 = document.getElementById("number1");
var operation = document.getElementById("operation");
var number2 = document.getElementById("number2");
var calculate = document.getElementById("calculate");
var sum;
//Event Listeners to detect when the calculate button is pressed
calculate.addEventListener("click", function(){
//Defining a variable to detect when one of the four operation is selected called selected
//operation.selectedIndex will return the selected option
    var selected = operation.value;
//If the plus sign is chosen, add
//We use parseInt so that the numbers are added instead of put next to each other in a string
    if (selected==="+") {
        sum = parseInt(number1.value) + parseInt(number2.value);
    }
//If the minus sign is chosen, subtract
    if (selected==="-") {
        sum = parseInt(number1.value) - parseInt(number2.value);
    }
//If the multiply sign is chosen, multiply
    if (selected==="*") {
        sum = parseInt(number1.value) * parseInt(number2.value);
    }
//If the division sign is chosen, divide
    if (selected==="/") {
        sum = parseInt(number1.value) / parseInt(number2.value);
    }
//If up caret is chosen, use exponent function
    if (selected==="^") {
        sum = Math.pow(number1.value, number2.value);
    }
//If Nth root is selected, use the Nth root function
    if (selected==="nth root") {
        sum = Math.pow(number2.value, 1/number1.value);
    }     
//1.797693134862316E+308 is the maximum value javascript can handle. After that, it will just display infinity.
//If the sum is larger than infinity, display "Number is too large"
//If the sum is less than or equal to infinity, display the sum
    if (sum === Infinity || sum === -Infinity ) {
    document.getElementById("Answer").innerHTML = "Number too big! Try again";
        }
    else {
    document.getElementById("Answer").innerHTML = sum;
    }
//Javascript cannnot handle negative numbers with the nth root function
//Because of this, the calculator will display negative numbers are not supported if it returns NaN
    if (document.getElementById("Answer").innerHTML === "NaN") {
    document.getElementById("Answer").innerHTML = "Negative numbers are not supported!"
    }
});