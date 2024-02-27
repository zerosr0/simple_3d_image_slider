let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let box = document.querySelector(".box__container");
let degree = 0;

prev.addEventListener("click", function () {
  console.log('10')
  degree += 90;
  box.style = `transform : perspective(1000px) rotateY(${degree - 10}deg)`;
})

next.addEventListener("click", function () {
  degree -= 90;
  box.style = `transform : perspective(1000px) rotateY(${degree - 10}deg)`;
})