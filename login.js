function seterror(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    let returnval = true;
    document.getElementsByClassName('formerror').innerHTML = "";

    let email = document.forms['myForm']["femail"].value;
    alert(email)
    if (email.length < 1) {
        seterror("email", "Enter the email address");
        returnval = false;
    }
    else {
        if (email.length < 8) {
            seterror("email", "Email is invalid");
            returnval = false;
        }
        if (!email.includes("@")) {
            seterror("email", "Email is invalid");
            returnval = false;
        }
    }

    let password = document.forms['myForm']["fpass"].value;
    if (password.length < 8) {
        seterror("pass", "Password is invalid");
        returnval = false;
    }
}

if (returnval) {
    document.getElementById("login-message").style.display = "block";
}

return returnval;
}