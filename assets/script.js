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
const dots = document.querySelectorAll('.dot'); 

let currentIndex = 0;


function updateDots(index) {
    // Parcourt chaque élément 'dot' dans la collection 'dots'
    dots.forEach((dot, i) => {
        // Vérifie si l'index courant est égal à l'index spécifié
        if (i === index) {
            // Ajoute la classe 'dot_selected' si c'est le cas
            dot.classList.add('dot_selected'); 
        } else {
            // Retire la classe 'dot_selected' si ce n'est pas le cas
            dot.classList.remove('dot_selected'); 
        }
    });
}


function updateCarousel(index, direction) {
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
    document.querySelector('p').innerHTML = tagLine; // Met à jour la légende

    // Affiche un message de débogage dans la console
    console.log(`Click sur la flèche ${direction}`);
}


arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); 
});


arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); 
});


updateCarousel(currentIndex );
updateDots(currentIndex); 