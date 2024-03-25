(function () {
    const images = document.querySelectorAll("#carousel-section img");
    const secondSectionBg = document.querySelector("section:nth-child(2)");
    const mobileMenu1 = document.querySelector("header > .mobile-menu");
    const mobileMenu2 = document.querySelector("footer > .mobile-menu");
    const firstMobileNavMenu = document.querySelector("header > div > svg");
    const secondMobileNavMenu = document.querySelector("footer > div > svg");
    const firstNavMenu = document.querySelector("#mobile-nav1");
    const secondNavMenu = document.querySelector("#mobile-nav2");
    
    images.forEach(image => {
        image.addEventListener("click", (e) => {
            secondSectionBg.setAttribute("style", `background-image: url(${e.target.src})`)
        })
    })

    firstMobileNavMenu.onclick = () => {
        secondNavMenu.style.display = "none";
        firstNavMenu.style.display === "none" || firstNavMenu.style.display === "" 
            ? firstNavMenu.style.display = "flex" : firstNavMenu.style.display = "none";
    }

    secondMobileNavMenu.onclick = () => {
        firstNavMenu.style.display = "none";
        secondNavMenu.style.display === "none" || secondNavMenu.style.display === "" 
            ? secondNavMenu.style.display = "flex" : secondNavMenu.style.display = "none";
    }

    document.onclick = (e) => {
        if (!mobileMenu1.contains(e.target) && !mobileMenu2.contains(e.target)) {
            firstNavMenu.style.display = "none";
            secondNavMenu.style.display = "none";
        }
    }
})()