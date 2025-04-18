document.addEventListener("DOMContentLoaded", function() {
    const correctAnswer = "el ferro";
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

    nextButton.addEventListener("click", function () {
        if (!nextButton.disabled) {
            window.location.href = "../html/explicacio_secret1.html";
        }
    });
});


function openModal(pistaId) {
    document.getElementById(pistaId).style.display = "flex";
}

function closeModal(pistaId) {
    document.getElementById(pistaId).style.display = "none";
}