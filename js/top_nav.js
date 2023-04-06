function list_click(){

    const navBar = document.querySelector("nav"),
        menuBtns = document.querySelectorAll(".menu-icon");
            // overlay = document.querySelector(".overlay");

    console.log(menuBtns);
    menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", () => {
            console.log('click')
            navBar.classList.toggle("open");
        });
    });

    console.log('Connect Success');
}