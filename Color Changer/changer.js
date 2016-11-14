//Defines variables and saves DOM elements for each
var bgColor = document.getElementById("bgColor");
var colorChangeBtn = document.getElementById("colorChangeBtn");

//Event listener for button to change color
colorChangeBtn.addEventListener("click", function(){
    document.body.style.backgroundImage = `url("${bgColor.value}")`;
})