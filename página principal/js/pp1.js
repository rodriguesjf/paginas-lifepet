const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

/* ABRIR E FECHAR MENU */

menuButton.addEventListener('click', () => {

    sidebar.classList.toggle('active');

});

document.addEventListener('click', (event) => {

    const clicouNoMenu =
        sidebar.contains(event.target);

    const clicouNoBotao =
        menuButton.contains(event.target);

    if(
        !clicouNoMenu &&
        !clicouNoBotao
    ){
        sidebar.classList.remove('active');
    }

});

/* PET */

const petCard = document.querySelector('.pet-card');

petCard.addEventListener('click', () => {

    alert('Abrir perfil do pet!');

});

/* ADICIONAR PET */

const addCard = document.querySelector('.add-card');

addCard.addEventListener('click', () => {

    alert('Adicionar novo pet!');

});