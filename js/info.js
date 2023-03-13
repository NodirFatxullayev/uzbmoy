let info1 = document.querySelector(".info1");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");
let info4 = document.querySelector(".info4");

let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;

function timer1() {
    if(i1 > 19) {
        i1 = 20;
    }
    info1.textContent = `${i1}`;
    i1++;
}

function timer2() {
    if(i2 > 1199) {
        i2 = 1200;
    }
    info2.textContent = `${i2}`;
    i2 += 5;
}

function timer3() {
    if(i3 > 49) {
        i3 = 50;
    }
    info3.textContent = `${i3}`;
    i3 += 3;
}

function timer4() {
    if(i4 > 61) {
        i4 = 62;
    }
    info4.textContent = `${i4}`;
    i4 += 3;
}

setInterval(timer1, 100);
setInterval(timer2, 10);
setInterval(timer3, 100);
setInterval(timer4, 100);