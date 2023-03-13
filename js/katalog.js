let x = 0;

let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slide = document.querySelector(".slide");

left.addEventListener("click", () => {
    x--;
    if(x < -7) {
        x = -8;
    }
    slide.style.transform = `translate(${x * 330}px, 0)`;
});

right.addEventListener("click", () => {
    x++;
    if( x >= 0) {
        x = 0;
    }
    slide.style.transform = `translate(${x * 330}px, 0)`;
});




