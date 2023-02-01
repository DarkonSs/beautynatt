function hambmenu() {
    var x = document.getElementById("section");
    var y = document.querySelector(".container");
    var body = document.querySelector("body")
    var header = document.querySelector("header")

    if (x.className.includes("hidden-section")) {
        x.classList.remove('hidden-section');
        x.classList.add("slide-left");
        x.style.position = 'fixed'
        y.classList.add("disable-selection")
        y.style.paddingTop = '79px'
        header.style.position = 'fixed'
        header.style.width = '100%'
        document.querySelector("#nav-icon3").classList.add("open");
        body.style.overflow = 'hidden'

    } else {
        x.classList.add("slide-right");
        x.classList.remove('slide-left');
        setTimeout(function () {
            x.classList.add('hidden-section');
            x.classList.remove('slide-right');
        }, 300);
        y.classList.remove("disable-selection")
        document.querySelector("#nav-icon3").classList.remove("open");
        y.style.paddingTop = 'inherit'
        header.style.position = 'inherit'
        header.style.width = 'inherit'
        body.style.overflow = 'inherit'
    }

    if (x.className.includes("slide-left")) {
        document.addEventListener('click', function handleClickOutsideBox(event) {

            if (event.target == body) {
                y.classList.remove("disable-selection")
                document.querySelector("#nav-icon3").classList.remove("open");
                y.style.paddingTop = 'inherit'
                header.style.position = 'inherit'
                header.style.width = 'inherit'
                body.style.overflow = 'inherit'
                x.classList.add("slide-right");
                x.classList.remove('slide-left');
                setTimeout(function () {
                    x.classList.add('hidden-section');
                    x.classList.remove('slide-right');
                }, 300);
            }
        });

    }
}

window.addEventListener("resize", function () {
    const mediaQuery2 = window.matchMedia("(min-width: 1200px)");

    const applyStyles2 = () => {

        if (mediaQuery2.matches) {

            var x = document.getElementById("section");
            var y = document.querySelector(".container");

            if (!x.className.includes("hidden-section")) {

                document.querySelector("#nav-icon3").classList.remove("open");

                x.classList.add("slide-right");
                x.classList.remove('slide-left');
                setTimeout(function () {
                    x.classList.add('hidden-section');
                    x.classList.remove('slide-right');
                }, 300);
                y.classList.remove("disable-selection")
            }

        }
    };

    applyStyles2();

    mediaQuery2.addListener(applyStyles2);
});