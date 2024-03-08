// Klick-Funktion für #hamburger hinzufügen
document.getElementById("hamburger").addEventListener("click", navStatus);

// Prüfen ob die Navigation geöffnet oder geschlossen ist
function navStatus() {
  if (document.body.classList.contains("hamburger-active")) {
    navClose();
  } else {
    navOpen();
  }
}

// Wenn die Navi geschlossen wird, Klasse für »offen« entfernen
function navClose() {
  document.body.classList.remove("hamburger-active");
}

// Wenn die Navi geöffnet wird, Klasse für »geschlossen« entfernen
function navOpen() {
  document.body.classList.add("hamburger-active");
}


//////////////////////ABOUT
let buttons = document.querySelectorAll(".about__button");
let contents = document.querySelectorAll(".about__content");

buttons.forEach(function (button, index) {

  button.addEventListener("click", function () {

    buttons.forEach(function (btn) {
      btn.classList.remove('about__button_active');
    });


    button.classList.add('about__button_active');


    contents.forEach(function (content) {
      content.style.display = 'none';
    });

    contents[index].style.display = 'flex';
  });
});
////////////////////////////////ACOORDION
let accordion_btns = document.querySelectorAll(".faq__header");
let accordion_contents = document.querySelectorAll(".faq__content");
let items = document.querySelectorAll('.faq__lines');


accordion_btns.forEach(function (button, index) {

  button.addEventListener("click", function () {
    items[index].children[0].classList.toggle("faq__line1_active");
    items[index].children[1].classList.toggle("faq__line2_active");
    button.classList.toggle('faq__header_active');


    if (accordion_contents[index].style.maxHeight) {
      accordion_contents[index].style.maxHeight = null;

    } else {
      accordion_contents[index].style.maxHeight = accordion_contents[index].scrollHeight + "px";


      for (let j = 0; j < accordion_contents.length; j++) {
        if (j != index) {
          accordion_contents[j].style.maxHeight = null;
          accordion_btns[j].classList.remove('faq__header_active');
          items[j].children[0].classList.remove("faq__line1_active");
          items[j].children[1].classList.remove("faq__line2_active");
        }

      }
    }
  });


});


////////////////////////////////////////////////Artists/////////////

let artistItem = document.querySelectorAll(".artists__person_disable");
let artistButton = document.querySelector(".artists__button");
let buttonText = document.querySelector(".artists__button-text");
let buttonIcon = document.querySelector(".artists__button-svg");
artistButton.addEventListener("click", function () {

  artistItem.forEach(function (item, index) {
    item.classList.toggle("artists__person_disable");
    if (item.classList.contains("artists__person_disable")) {
      buttonText.innerHTML = "Show more";
      buttonIcon.style.display = "block";
    } else {
      buttonText.innerHTML = "Hide";
      buttonIcon.style.display = "none";
    }
  })



});
////////////////////////////////////////SCROLL


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    navClose();
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};