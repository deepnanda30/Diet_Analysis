var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("U+0058");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}





// Create a new list item when clicking on the "Add" button
function newElement() {

    document.getElementById("myInput").value = "";
    document.getElementById("lun").value = "";
    document.getElementById("bf").value = "";
    document.getElementById("din").value = "";
}