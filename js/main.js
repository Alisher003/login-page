

function validateFormLogin() {
    let username = document.forms["form-log-in"][txtUsername].value

    if(username === null || username === "" || username === "username") {
        alert("Please insert a Username");
        return false
    }

    let password = document.forms["form-log-in"][txtpassword].value;
    if(password === null || password === "" || password === "Password") {
        return false;
    }

    return true
}