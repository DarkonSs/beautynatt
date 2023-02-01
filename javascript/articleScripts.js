var code0 = document.getElementById('header')
var code3 = document.getElementById('footer')
// var code5 = document.getElementById('headerDirectAccess')

if (code0) {
  code0.innerHTML = `
<div class="navLogo">

  <a href="../home">BeautyNatt</a>

  <div id="search">
    <form id="search-form">
    <input type="text" id="searchInput" placeholder="Find pages" disabled>
    <button type="submit" aria-label="searchButton"><img src="../img/manifyingGlassIcon.webp" alt="manifying glass icon"></button>
    </form>
  </div>

</div>

<div class="navbar">
  <ul>
   <li><a href="../home">Home</a></li>
    <li><a href="../home#latestPagesPart">Latest Pages</a></li>
   <li><a href="../about-us">About Us</a></li>
    <li><a href="../contact">Contact</a></li>
   <li><a href="../home#faq">FAQ</a></li>
  </ul>
</div>

<div onclick="hambmenu()" id="nav-icon3" class="hamb">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

<section class="seccion hidden-section" id="section">
  <ul>
   <li><a href="../home">Home</a></li>
   <li><a href="../home#latestPagesPart">Latest Pages</a></li>
   <li><a href="../about-us">About Us</a></li>
    <li><a href="../contact">Contact</a></li>
   <li><a href="../home#faq">FAQ</a></li>
  </ul>
</section>
    `
}

if (code3) {
  code3.innerHTML = `
<a href="#top" onclick="document.body.scrollTop = 0; document.documentElement.scrollTop = 0;" class="backUpBtn">
  BACK UP ▲
</a>

    <div class="footer">

      <div class="mainFooter">

        <ins>BeautyNatt</ins>
        <p style="margin-top: 0px;;">You should know that for each sale made through our pages, we will
          receive a commission from it for the reason that we are affiliated with them. But this will not affect your
          purchase at all.</p>
      </div>

      <div class="linksFooter">
        <div class="linksPart">

        <!--  <div class="linksSide">
            <div class="">
              <h3>Categories</h3>
              <a href="../home">Makeup</a>
              <a href="../home">Body Care</a>
              <a href="../home">Frangrance</a>
              <a href="../home">Hair Care</a>
              <a href="../home">Oral Care</a>
              <a href="../home">Skin Care</a>
            </div>
          </div>
-->
          <div>
            <div class="linksSide">
              <div class="">
                <h3>Main Pages</h3>
                <a href="../home">Home</a>
                <a href="../contact">Contact</a>
                <a href="../about-us">About Us</a>
                <a href="../">Terms</a>
                <a href="../sitemap">Sitemap</a>
                <a href="../home#latestPagesPart">Latest Pages</a>
              </div>
              <div class="">
                <h3>Social Media</h3>
                <a target="_blank" href="https://www.facebook.com/">Facebook</a>
                <a target="_blank" href="https://www.instagram.com/">Instagram</a>
                <a target="_blank" href="https://twitter.com/">Twitter</a>
                <a target="_blank" href="https://www.youtube.com/">Youtube</a>
              </div>
            </div>

          </div>
        </div>
`
}

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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz61uJxWIZpi731gEQwIN6CTYwsPxjaEo",
  authDomain: "beautynatt-95095.firebaseapp.com",
  projectId: "beautynatt-95095",
  storageBucket: "beautynatt-95095.appspot.com",
  messagingSenderId: "823311186042",
  appId: "1:823311186042:web:f1533408d157d14c6f63c3",
  measurementId: "G-BXFSQZ8HZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);