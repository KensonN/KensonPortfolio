//variable for task input
var entertask = document.getElementById("entertask");
//variable for add button
var add = document.getElementById("add");
//variable for the div with the list
var list = document.getElementById("list");
//variable for color input
var taskcolor = document.getElementById("color");

//event listener to detect click of "add" button
add.addEventListener("click", function() {
//variable to create list elements fir the to-do list    
    var listitem = document.createElement("li");
//variable to change the list item color to the color input value
    listitem.style.color = taskcolor.value;
//appends child to add items to a list
    listitem.appendChild(document.createTextNode(entertask.value));
    list.appendChild(listitem);
//resets input box
    entertask.value = '';
});
//event listener to remove items
list.addEventListener("click", function(evt) {
//variable to see what is clicked    
    var remove= evt.target;
//if there is no formatting on the text, on click, make it strikethrough
    if (remove.style.textDecoration==="") {
        remove.style.textDecoration="line-through";
    }
//otherwise, create a confirmation box. if yes is pressed in the confirm box, delete the task. if no is pressed in the confirm box, do nothing    
    else {
        var confirm = window.confirm("Would you like to delete this task?");
        if (confirm===true) {
        remove.parentNode.removeChild(remove);
        }
        else {
        remove.style.textDecoration="line-through";
        }
    }
});

