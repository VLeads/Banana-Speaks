// var username = prompt("Enter your good name");

// var output= "Hi " + username + "!";

// alert(output);

var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error){
    alert("Something went wrong. Try again later..!");
}

function addQueryToURL(inputText){
    return serverURL + "?"+ "text="+ inputText
}

function clickHandler() {
    
    var text = txtInput.value;

        fetch(addQueryToURL(text))
        .then(response => response.json() )
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
        }  


btnTranslate.addEventListener("click", clickHandler);