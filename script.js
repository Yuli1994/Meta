let buttons = document.querySelectorAll(".about__button");
let contents = document.querySelectorAll(".about__content");

buttons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        buttons.forEach(function(btn) {
            btn.classList.remove('about__button_active');
        });


        button.classList.add('about__button_active');


        contents.forEach(function(content) {
            content.style.display = 'none';
        });

        contents[index].style.display = 'flex';
    });
});

let accordion_btns = document.querySelectorAll(".faq__header");
let accordion_contents = document.querySelectorAll(".faq__content");
let items = document.querySelectorAll('.faq__lines');


accordion_btns.forEach(function(button, index) {

button.addEventListener("click", function(){
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




