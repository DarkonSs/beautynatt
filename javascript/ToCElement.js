document.addEventListener('scroll', function () {
    if (document.getElementById('ToC')) {
        if (window.innerWidth > 10) {

            if (window.pageYOffset >= 60) {

                document.getElementById('ToC').style.position = 'fixed'
                document.getElementById('ToC').style.top = '100px'

            }

            if ((window.pageYOffset + document.getElementById('ToC').offsetHeight) >= (document.getElementById('moreContent').offsetTop - 140) && window.pageYOffset > 60) {

                const a = document.getElementById('moreContent').offsetTop - 26 - document.getElementById('ToC').offsetHeight
                document.getElementById('ToC').style.position = 'absolute'
                document.getElementById('ToC').style.top = a + "px"

            }

            if (window.pageYOffset < 60) {

                document.getElementById('ToC').style.position = 'relative'
                document.getElementById('ToC').style.top = '74px'

            }
        }
    }
})