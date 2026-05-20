/* BOTÃO VOLTAR */

const backButton = document.querySelector('.back-button');

backButton.addEventListener('click', () => {

    window.history.back();

});

/* EDITAR */

const editBtn = document.querySelector('.edit-btn');

editBtn.addEventListener('click', () => {

    alert('Editar informações do pet!');

});

/* EXCLUIR */

const deleteBtn = document.querySelector('.delete-btn');

deleteBtn.addEventListener('click', () => {

    const confirmar =
    confirm('Deseja realmente excluir este pet?');

    if(confirmar){

        alert('Pet excluído.');

    }

});

/* MENU LATERAL */

const menuButton =
document.getElementById('menuButton');

const sidebar =
document.getElementById('sidebar');

/* ABRIR/FECHAR */

menuButton.addEventListener('click', () => {

    sidebar.classList.toggle('active');

});

/* FECHAR AO CLICAR FORA */

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