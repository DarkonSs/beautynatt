function moreContentWidth() {
    if (document.getElementById('Article-Middle-Grid')) {
        const ToC = document.querySelector("#ToC")
        const moreContent = document.getElementById('moreContent')
        const pageWidth = document.querySelector("#Article-Middle-Grid > div.article").offsetWidth
        if (ToC) {
            moreContent.style.width = pageWidth + ToC.offsetWidth + 'px'
        } else {
            moreContent.style.width = pageWidth + 'px'
        }
    }
}
moreContentWidth()

window.addEventListener("resize", function () {
    const mediaQuery4 = window.matchMedia("(min-width: 430px)");

    const applyStyles4 = () => {

        if (mediaQuery4.matches) {

            moreContentWidth()

        }
    };

    applyStyles4();

    mediaQuery4.addListener(applyStyles4);

    const mediaQuery5 = window.matchMedia("(max-width: 430px)");

    const applyStyles5 = () => {

        if (mediaQuery5.matches) {
            if (document.getElementById('Article-Middle-Grid')) {
                document.getElementById('moreContent').style.width = 'inherit'
            }
        }
    };

    applyStyles5();

    mediaQuery5.addListener(applyStyles5);
});

function leftScroll(ele) {
    const left = ele.parentNode.children[1]
    left.scrollBy(-270, 0);
}

function rightScroll(ele) {
    const right = ele.parentNode.children[1]
    right.scrollBy(270, 0);
}