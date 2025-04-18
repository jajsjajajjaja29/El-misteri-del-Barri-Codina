document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("imageModal");
    let openModal = document.getElementById("openModal");
    let closeModal = document.querySelector(".close-btn");

    // Abrir modal al hacer clic en la imagen
    openModal.onclick = function () {
        modal.style.display = "flex";
    };

    // Cerrar modal al hacer clic en el botón de cerrar
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    // Cerrar modal al hacer clic fuera de la imagen
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

