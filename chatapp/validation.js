function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateSignUpInputCredentials() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email_address").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let nameErr = emailErr = passwordErr = confirmPasswordErr = true;

    if (username === "") {
        printError("usernameErr", "Please enter your username");
    } else {
        printError("usernameErr", "");
        nameErr = false;
    }

    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (password === "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    if (confirmPassword === "") {
        printError("confirmPasswordErr", "Please confirm your password");
    } else if (password !== confirmPassword) {
        printError("confirmPasswordErr", "Passwords do not match");
    } else {
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
    }

    return !(nameErr || emailErr || passwordErr || confirmPasswordErr);
}

function validateLoginInputCredentials() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let emailErr = passwordErr = true;

    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (password === "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }
    return !(emailErr || passwordErr);
}

function validateRecipientEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
