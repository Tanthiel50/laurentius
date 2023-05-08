// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const openModalBtn = document.querySelector(".btn-open");
// const closeModalBtn = document.querySelector(".btn-close");

// // close modal function
// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// // close the modal when the close button and overlay is clicked
// closeModalBtn.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// // close modal when the Esc key is pressed
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// // open modal function
// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };
// // open modal event
// openModalBtn.addEventListener("click", openModal);

/*------------------------ APPLICATION METEO------------------------- */

function applicationMeteo() {
  el = document.getElementById("applicationMeteo");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  }

// close the modal when the close button and overlay is clicked
function closeApplicationMeteo() {
  var appDiv = document.getElementById("applicationMeteo");
  appDiv.style.visibility = "hidden";
}

// Ajouter un écouteur d'événements "keydown" sur l'ensemble du document
document.addEventListener('keydown', function(event) {
  // Récupérer la modal "applicationMeteo"
  var appDiv = document.getElementById("applicationMeteo");
  // Vérifier si la touche appuyée est la touche "escap"
  if (event.key === "Escape") {
    // Masquer la modal si la touche "escape" est appuyée
    appDiv.style.visibility = "hidden";
  }
});

/*------------------------ CAKE SCRAP V1------------------------- */

function cakeScrapV1() {
  el = document.getElementById("cakeScrapV1");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  }

// close the modal when the close button and overlay is clicked
function closeCakeScrapV1() {
  var appDiv = document.getElementById("cakeScrapV1");
  appDiv.style.visibility = "hidden";
}

// Ajouter un écouteur d'événements "keydown" sur l'ensemble du document
document.addEventListener('keydown', function(event) {
  // Récupérer la modal "applicationMeteo"
  var appDiv = document.getElementById("cakeScrapV1");
  // Vérifier si la touche appuyée est la touche "escap"
  if (event.key === "Escape") {
    // Masquer la modal si la touche "escape" est appuyée
    appDiv.style.visibility = "hidden";
  }
});

/*------------------------ CAKE SCRAP V2------------------------- */

function cakeScrapV2() {
  el = document.getElementById("cakeScrapV2");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  }

// close the modal when the close button and overlay is clicked
function closeCakeScrapV2() {
  var appDiv = document.getElementById("cakeScrapV2");
  appDiv.style.visibility = "hidden";
}

// Ajouter un écouteur d'événements "keydown" sur l'ensemble du document
document.addEventListener('keydown', function(event) {
  // Récupérer la modal "applicationMeteo"
  var appDiv = document.getElementById("cakeScrapV2");
  // Vérifier si la touche appuyée est la touche "escap"
  if (event.key === "Escape") {
    // Masquer la modal si la touche "escape" est appuyée
    appDiv.style.visibility = "hidden";
  }
});

/*------------------------ bitcoin------------------------- */

function bitcoin() {
  el = document.getElementById("bitcoin");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  }

// close the modal when the close button and overlay is clicked
function closeBitcoin() {
  var appDiv = document.getElementById("bitcoin");
  appDiv.style.visibility = "hidden";
}

// Ajouter un écouteur d'événements "keydown" sur l'ensemble du document
document.addEventListener('keydown', function(event) {
  // Récupérer la modal "applicationMeteo"
  var appDiv = document.getElementById("bitcoin");
  // Vérifier si la touche appuyée est la touche "escap"
  if (event.key === "Escape") {
    // Masquer la modal si la touche "escape" est appuyée
    appDiv.style.visibility = "hidden";
  }
});

/*------------------------ defilement smooth------------------------- */
// Récupérer tous les liens de la navbar qui contiennent une ancre
var navbarLinks = document.querySelectorAll('.navbar a[href^="#"]');

// Ajouter un écouteur d'événements "click" à chaque lien
// Récupérer tous les liens de la navbar qui contiennent une ancre
var navbarLinks = document.querySelectorAll('nav a[href^="#"]');

// Ajouter un écouteur d'événements "click" à chaque lien
navbarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Empêcher le comportement par défaut de l'événement "click"
    event.preventDefault();
    // Récupérer l'élément cible correspondant à l'ancre dans l'attribut "href" du lien
    var target = document.querySelector(link.getAttribute('href'));
    // Déplacer la page en douceur jusqu'à l'emplacement de l'ancre
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/*------------------------ navbar------------------------- */
