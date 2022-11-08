const body = document.body;
const dark = document.querySelector(".Dark");
const slidingMain = document.querySelectorAll(".wrapper-sliding");
const slidingSecondary = document.querySelectorAll(".wrapper-sliding-secondary");
dark.style.width = `${window.innerWidth / 16}rem`;
body.addEventListener("mousemove", (e) => {
    let posX = e.clientX;
    dark.style.width = `${posX * 100 / window.innerWidth}%`;
});
console.log(window.innerWidth);

