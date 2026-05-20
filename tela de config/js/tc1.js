const menuButton =
document.getElementById('menuButton');

const sidebar =
document.getElementById('sidebar');

/* MENU */

menuButton.addEventListener('click', () => {

    sidebar.classList.toggle('active');

});

/* FECHAR MENU AO CLICAR FORA */

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

/* CARDS */

const cards =
document.querySelectorAll('.settings-card');

cards.forEach((card) => {

    card.addEventListener('click', () => {

        const titulo =
        card.querySelector('h2').innerText;

        alert(`Abrir ${titulo}`);

    });

});