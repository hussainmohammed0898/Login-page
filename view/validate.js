const form = document.querySelector("form");
const username = document.querySelector("input[type=text]");
const password = document.querySelector("input[type=password");


form.addEventListener("submit", onSubmitFunction);


function onSubmitFunction(e){
    if(!username.value.trim() || !password .value.trim()){
        e.preventDefault();
        alert("Please fill the form");
        return false;
    }
}