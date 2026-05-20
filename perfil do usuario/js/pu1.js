const editBtn = document.getElementById('editBtn');

editBtn.addEventListener('click', () => {

    alert('Editar perfil!');

});

/* VOLTAR */

const backButton = document.querySelector('.back-button');

backButton.addEventListener('click', () => {

    window.history.back();

});