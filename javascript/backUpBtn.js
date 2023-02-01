document.addEventListener('scroll', function () {
    if (document.getElementById('header')) {
        if (window.pageYOffset <= document.getElementById('header').offsetHeight + 40) {

            document.getElementById('bubtn').style.display = 'none'

        } else if (document.getElementById('footer').style.display != 'none') {

            if (window.pageYOffset + window.innerHeight >= document.getElementById('footer').offsetTop) {

                document.getElementById('bubtn').style.display = 'none'

            } else {

                document.getElementById('bubtn').style.display = 'inherit'

            }
        } else {
            document.getElementById('bubtn').style.display = 'inherit'
        }
    }

    if (document.getElementById('header2')) {
        if (window.pageYOffset <= document.getElementById('header2').offsetHeight + 40) {

            document.getElementById('bubtn').style.display = 'none'

        } else if (document.getElementById('footer').style.display != 'none') {

            if (window.pageYOffset + window.innerHeight >= document.getElementById('footer').offsetTop) {

                document.getElementById('bubtn').style.display = 'none'

            } else {

                document.getElementById('bubtn').style.display = 'inherit'

            }
        } else {
            document.getElementById('bubtn').style.display = 'inherit'
        }
    }
})