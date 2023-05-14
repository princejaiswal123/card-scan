const card = document.querySelector(".first__inner");
const card1 = document.querySelector(".second__inner");

const card2= document.querySelector(".third__inner");
const card3= document.querySelector(".fourth_inner");

console.log(card)

card.addEventListener("mouseover", function (e) {
  card.classList.toggle('is-flipped');
});
card1.addEventListener("mouseover", function (e) {
    card1.classList.toggle('second-flipped');
  });
  card2.addEventListener("mouseover", function (e) {
    card2.classList.toggle('third-flipped');
  });
  card3.addEventListener("mouseover", function (e) {
    card3.classList.toggle('fourth-flipped');
  });

  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}



