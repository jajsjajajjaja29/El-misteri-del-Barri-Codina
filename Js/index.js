// script.js
function openModal(src) {
    document.getElementById('modalImg').src = src;
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
