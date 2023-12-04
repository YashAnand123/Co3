var name = prompt("Hi! What is your name?");
console.log(name);
alert("Hi " +name);

let answer = prompt("What is your favorite Color?");
alert("Thats a nice color!");


document.body.addEventListener("keydown", changeColor);

function changeColor(event){
    if(document.body.style.backgroundColor == answer) {
        document.body.style.backgroundColor = "tan";
    }
    else{
        document.body.style.backgroundColor = answer;
    }
}
