const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots')

let currentIndex = 0;



slides.forEach((slide, index) => {
    const dot = document.createElement('div')// Crée un élément de type "Div"
    dot.classList.add('dot')// lui ajoute la classe "dot"
    dotsContainer.appendChild(dot)// et le positionne en tant qu'enfant de la classe '.dots' qui est la variable dotsContainer

    // Ajouter un gestionnaire d'événements pour chaque point
    dot.addEventListener('click', () => {
        currentIndex = index; // Met à jour l'index courant avec celui du point cliqué
        updateCarousel(); // Met à jour le carrousel pour afficher la nouvelle slide
        console.log(`Slide index numéro : ${currentIndex}`)
    });
});

const dots = document.querySelectorAll('.dot'); // Crée la variable "dots" pour chaque élémenet qui a une classe ".dot"

function updateDots() {
    // Parcourt chaque élément 'dot' dans la collection 'dots'
    dots.forEach((dot, i) => {
        // Vérifie si l'index courant est égal à l'index spécifié
        if (i === currentIndex) {
            // Ajoute la classe 'dot_selected' si c'est le cas
            dot.classList.add('dot_selected'); 
        } else {
            // Retire la classe 'dot_selected' si ce n'est pas le cas
            dot.classList.remove('dot_selected'); 
        }
    });
}


function updateCarousel(direction) {
    // Vérifie et ajuste l'index courant en fonction de la direction
    if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1; // Si à gauche depuis le début, va à la fin
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0; // Si à droite depuis la fin, va au début
    }

    // Met à jour l'image du carrousel
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath; // Met à jour l'image source
    bannerImg.alt = `Slide ${currentIndex + 1}`; // Met à jour le texte alternatif

    // Met à jour le texte de la légende
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('#banner p').innerHTML = tagLine; // Met à jour la légende

    // Affiche un message de débogage dans la console
    console.log(`Click sur la flèche ${direction}`);

    updateDots();
}


arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel( 'left');
});


arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel( 'right');

});





updateCarousel(currentIndex );
