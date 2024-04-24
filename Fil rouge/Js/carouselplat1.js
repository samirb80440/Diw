document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  var precedent = document.getElementById("precedent");
  var suivant = document.getElementById("suivant"); //definie les bouton Precedent et suivant

  var veggie = document.getElementById("pageveggie");
  var hamburger = document.getElementById("pagehamburger");
  var pasta = document.getElementById("pagepate");
  var wrap = document.getElementById("pagewrap");
  var pizza = document.getElementById("pagepizza");
  var asianfood = document.getElementById("pageasian");
  var page = 1; //Compteur de Page pour le carousel
  if (document.getElementById("checkplathtml") != null) {
    hamburger.style.display = "none";
    pasta.style.display = "none";
    wrap.style.display = "none";
    pizza.style.display = "none";
    asianfood.style.display = "none";
  } //definie et desactive tout les cellule sauf la premiere si checkplat existe

  suivant.addEventListener("click", function suivant() {
    page++;
    if (page > 6) {
      page = 1;
    }
    pages(page);
  }); //fait tourner le carousel avec Suivant

  precedent.addEventListener("click", function precedent() {
    page--;
    if (page < 1) {
      page = 6;
    }
    pages(page);
  }); //fait tourner le carousel avec Precedent

  function pages(page) {
    //fonctionne pour afficher la page en fonction du compteur

    veggie.style.display = "none";
    hamburger.style.display = "none";
    pasta.style.display = "none";
    wrap.style.display = "none";
    pizza.style.display = "none";
    asianfood.style.display = "none";

    if (page == 1) {
      veggie.style.display = "block";
    }
    if (page == 2) {
      hamburger.style.display = "block";
    }
    if (page == 3) {
      pasta.style.display = "block";
    }
    if (page == 4) {
      wrap.style.display = "block";
    }
    if (page == 5) {
      pizza.style.display = "block";
    }
    if (page == 6) {
      asianfood.style.display = "block";
    }
  }
});
