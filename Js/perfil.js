document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.getElementById("avatar");
    const avatarInput = document.getElementById("avatarInput");

    avatar.addEventListener("click", function() {
        avatarInput.click();
    });

    avatarInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                avatar.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

function logout() {
    alert("Sesión cerrada");
    window.location.href = "../Inicio_sesion.html";
}
