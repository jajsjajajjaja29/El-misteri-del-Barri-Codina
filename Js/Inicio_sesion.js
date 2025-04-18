function validateLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    if (!email.includes("@") || password.length < 6) {
        alert("email o contrasenya invàlids.");
        return false;
    }
    return true;
}

function validateRegister() {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;
    
    if (name.length < 3) {
        alert("El nom ha de tenir almenys 3 caràcters.");
        return false;
    }
    if (!email.includes("@")) {
        alert("Correu electrònic invàlid.");
        return false;
    }
    if (password.length < 6) {
        alert("La contrasenya ha de tenir almenys 6 caràcters.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Les contrasenyes no coincideixen.");
        return false;
    }
    return true;
}