var entertask = document.getElementById("entertask");
var add = document.getElementById("add");
var task = entertask;

add.addEventListener("click", function() {
    var list = document.getElementById("list");
    var listitem = document.createElement("li");
    listitem.appendChild(document.createTextNode(entertask.value));
    list.appendChild(listitem);
    entertask.value = '';
})