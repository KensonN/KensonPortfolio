var entertask = document.getElementById("entertask");
var add = document.getElementById("add");
var task = entertask;
var list = document.getElementById("list");
var taskcolor = document.getElementById("color");

add.addEventListener("click", function() {
    var list = document.getElementById("list");
    var listitem = document.createElement("li");
    listitem.style.color = taskcolor.value;
    listitem.appendChild(document.createTextNode(entertask.value));
    list.appendChild(listitem);
    entertask.value = '';
});

list.addEventListener("click", function(evt) {
    var remove= evt.target;
    if (remove.style.textDecoration==="") {
        remove.style.textDecoration="line-through";
    }
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

