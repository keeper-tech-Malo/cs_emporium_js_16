

let jour = document.querySelectorAll('nav button')[0];
let nuit = document.querySelectorAll('nav button')[1];
let navButton = document.querySelectorAll('nav button')[2];
let head = document.getElementsByTagName('header')[0];
let logo = document.querySelector('img');
let review = document.getElementById('review');
let icon = document.getElementById('bars');


// Permet de passer le bodyen mode nuit 

jour.addEventListener('click', () => {
    document.body.classList.remove('bg-dark');
    navButton.classList.replace('bg-light', 'bg-dark');
    navButton.classList.replace('text-dark', 'text-white');
    document.body.classList.remove('text-white');
    review.querySelectorAll('.col-lg-4')[0].style.color = '';
    review.querySelectorAll('.col-lg-4')[2].style.color = '';
    logo.style.filter = '';
    icon.querySelectorAll('div').forEach(e => {
        e.style.backgroundColor = '#333';
    })
    head.querySelectorAll('a').forEach(e => {
        e.classList.replace('text-white', 'text-secondary');
    })
});

nuit.addEventListener('click', () => {
    document.body.classList.add('bg-dark');
    navButton.classList.replace('bg-dark', 'bg-light');
    navButton.classList.replace('text-white', 'text-dark');
    document.body.classList.add('text-white');
    review.querySelectorAll('.col-lg-4')[0].style.color = 'black';
    review.querySelectorAll('.col-lg-4')[2].style.color = 'black';
    icon.classList.add('text-white');
    icon.querySelectorAll('div').forEach(e => {
        e.style.backgroundColor = '#ffffff';
    })
    head.querySelectorAll('a').forEach(e => {
        e.classList.replace('text-secondary', 'text-white');
    })
});

// Modal

let modal = document.getElementById('myModal');

let modalButton = document.querySelectorAll('.modal button');
let formulaire = document.getElementsByClassName('formulaire');

let fermer = document.getElementsByClassName('fermer')[0];

// Déclenche le modal lorsqu'on clique sur le bouton connexion

navButton.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

});
// Change de fenetre selon qu'on clique sur se connecter ou s'inscrire 

modalButton[0].addEventListener('click', () => {
    formulaire[0].classList.remove('d-none');
    formulaire[1].classList.add('d-none');
    modalButton[1].classList.remove('d-none');
    modalButton[0].classList.add('d-none');
});

modalButton[1].addEventListener('click', () => {
    formulaire[1].classList.remove('d-none');
    formulaire[0].classList.add('d-none');
    modalButton[0].classList.remove('d-none');
    modalButton[1].classList.add('d-none');
});

// Ferme la page lorsqu'on clique sur le span croix

fermer.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});

// Ferme le modal lorsqu'on clique en dehors de la fenetre

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = '';
    }
}
