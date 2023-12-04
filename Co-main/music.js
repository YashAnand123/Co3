var name = prompt("would you like to change who killer queen was made by?");

var content_change = document.getElementById("bounty");
content_change.textContent = "1. Killer Queen: By " + name;

function change_colors(element){
    if (element.style.color = "blue"){
        element.style.color = "yellow"
    }
   if (element.style.color = "red"){
   
    element.style.color = "green"
        }
    if (element.style.color = "green"){
        element.style.color = "orange"
        }
}