// var username = prompt("Enter your good name");

// var output= "Hi " + username + "!";

// alert(output);

var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

function clickHandler() {
    console.log("clicked");
    console.log(txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler);