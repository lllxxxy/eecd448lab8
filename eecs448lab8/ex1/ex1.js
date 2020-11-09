var password = document.getElementById("password");
var validate = document.getElementById("validate");

function errorMessage(){
    if (password.value != validate.value)
    {
        window.alert("not match");
    }
    if (password.value === validate.value)
    {
        window.alert("match");
    }
    if (password.value.length < 8)
    {
        window.alert("min 8 characters");
    }
}