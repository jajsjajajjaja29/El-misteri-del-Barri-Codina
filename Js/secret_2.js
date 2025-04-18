document.addEventListener("DOMContentLoaded", function() {
    const correctAnswer = "el 1920"; // Respuesta correcta sin espacios ni mayúsculas
    const inputField = document.getElementById("secret-input");
    const nextButton = document.getElementById("next-secret");

    inputField.addEventListener("input", function() {
        let userInput = inputField.value.trim().toLowerCase();

        if (userInput === correctAnswer) {
            nextButton.disabled = false;
            nextButton.classList.add("enabled");
        } else {
            nextButton.disabled = true;
            nextButton.classList.remove("enabled");
        }
    });

    nextButton.addEventListener("click", function() {
        if (!nextButton.disabled) {
            window.location.href = "../html/explicacio_secret2.html"; // Cambia a la siguiente página
        }
    });
});

const images = [
    "../img/Document-1-Fotografia-antiga-d'un-estiuejant.jpg",
    "../img/Document-2-Extracte-d’una-carta-d’un-estiuejant.jpg",
    "../img/Document-3-Registre-de-visitants.jpg",
    "../img/Document-4-Carta-d'un-visitant.jpg"
];
let currentImageIndex = 0;

function openModal(index) {
    currentImageIndex = index;
    document.getElementById("modalImg").src = images[currentImageIndex];
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function prevImage(event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("modalImg").src = images[currentImageIndex];
}

function nextImage(event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("modalImg").src = images[currentImageIndex];
}

function openModalText(pista) {
    document.getElementById(pista).style.display = "flex";
}

function closeModalText(pista) {
    document.getElementById(pista).style.display = "none";
}
