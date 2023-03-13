let navLogo = document.querySelector(".nav-logo");
let navBar = document.querySelector(".nav-bar");
let navItem = 0;

navLogo.addEventListener("click", () => {
    navItem++;

    if(navItem % 2 !== 0 && navItem !== 0){
        navBar.classList.add("hidden");
        console.log(navItem);
    }
    if(navItem % 2 === 0){
        navBar.classList.remove("hidden");
        console.log(navItem);
    }
})

