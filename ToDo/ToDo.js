var entertask = document.getElementById("entertask");
var add = document.getElementById("add");
var task = entertask;

add.addEventListener("click", function() {
    document.getElementById("list").innerHTML = task.value;
})