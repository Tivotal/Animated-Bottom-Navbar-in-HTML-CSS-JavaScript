/* Created by Tivotal */

let btns = document.querySelectorAll(".btn");
let indicator = document.querySelector(".indicator");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    console.log(index);
    indicator.style.transform = `translateX(calc(${index} * 80px))`;
  });
});
