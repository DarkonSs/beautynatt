document.addEventListener('scroll', function () {
    if (document.getElementById('socialMediaOnLeftSticky')) {
        if (window.innerWidth > 1000) {
            if (window.pageYOffset >= 215) {

                document.getElementById('socialMediaOnLeftSticky').style.position = 'fixed'
                document.getElementById('socialMediaOnLeftSticky').style.top = '10px'

            } else if (window.pageYOffset < 230) {

                document.getElementById('socialMediaOnLeftSticky').style.position = 'relative'
                document.getElementById('socialMediaOnLeftSticky').style.top = '150px'

            }

            if (window.pageYOffset + document.getElementById('socialMediaOnLeftSticky').offsetHeight >= document.getElementById('moreContent').offsetTop - 100) {

                const a = document.getElementById('moreContent').offsetTop - 89 - document.getElementById('socialMediaOnLeftSticky').offsetHeight
                document.getElementById('socialMediaOnLeftSticky').style.position = 'absolute'
                document.getElementById('socialMediaOnLeftSticky').style.top = a + "px"

            }
        }
    }
})

const mediaQuery = window.matchMedia("(max-width: 780px)");

const applyStyles = () => {

    if (document.getElementById('Article-Middle-Grid')) {
        if (mediaQuery.matches) {
            const articleInfoElement = document.getElementById("articleInfo");
            const socialMediaOnLeftElement = document.getElementById("socialMediaOnLeft");

            const outerDiv = document.createElement("div");
            outerDiv.classList.add("socialMediaOnArticle");
            outerDiv.id = "socialMediaOnArticle";

            const youtubeImg = document.createElement("img");
            youtubeImg.src = "../img/youtubeLogo.png";
            youtubeImg.alt = "";
            const twitterImg = document.createElement("img");
            twitterImg.src = "../img/twitterLogo.png";
            twitterImg.alt = "";
            const instagramImg = document.createElement("img");
            instagramImg.src = "../img/instagramLogo.png";
            instagramImg.alt = "";
            const facebookImg = document.createElement("img");
            facebookImg.src = "../img/facebookLogo.png";
            facebookImg.alt = "";

            const youtubeLink = document.createElement("a");
            youtubeLink.target = "_blank";
            youtubeLink.href = "https://www.youtube.com/";
            youtubeLink.appendChild(youtubeImg);

            const twitterLink = document.createElement("a");
            twitterLink.target = "_blank";
            twitterLink.href = "https://twitter.com/";
            twitterLink.appendChild(twitterImg);

            const instagramLink = document.createElement("a");
            instagramLink.target = "_blank";
            instagramLink.href = "https://www.instagram.com/";
            instagramLink.appendChild(instagramImg);

            const facebookLink = document.createElement("a");
            facebookLink.target = "_blank";
            facebookLink.href = "https://www.facebook.com/";
            facebookLink.appendChild(facebookImg);

            outerDiv.appendChild(youtubeLink);
            outerDiv.appendChild(twitterLink);
            outerDiv.appendChild(instagramLink);
            outerDiv.appendChild(facebookLink);

            articleInfoElement.appendChild(outerDiv);
            socialMediaOnLeftElement.remove()

        } else {
            if (!document.getElementById("socialMediaOnLeft")) {

                const socialMediaOnLeft = document.createElement("div");
                socialMediaOnLeft.classList.add("socialMediaOnLeft");
                socialMediaOnLeft.id = "socialMediaOnLeft";

                const socialMediaOnLeftSticky = document.createElement("div");
                socialMediaOnLeftSticky.classList.add("socialMediaOnLeftSticky");
                socialMediaOnLeftSticky.id = "socialMediaOnLeftSticky";

                const facebookLink = document.createElement("a");
                facebookLink.target = "_blank";
                facebookLink.href = "https://www.facebook.com/";
                const facebookImg = document.createElement("img");
                facebookImg.src = "../img/facebookLogo.png";
                facebookImg.alt = "";
                facebookLink.appendChild(facebookImg);

                const instagramLink = document.createElement("a");
                instagramLink.target = "_blank";
                instagramLink.href = "https://www.instagram.com/";
                const instagramImg = document.createElement("img");
                instagramImg.src = "../img/instagramLogo.png";
                instagramImg.alt = "";
                instagramLink.appendChild(instagramImg);

                const twitterLink = document.createElement("a");
                twitterLink.target = "_blank";
                twitterLink.href = "https://twitter.com/";
                const twitterImg = document.createElement("img");
                twitterImg.src = "../img/twitterLogo.png";
                twitterImg.alt = "";
                twitterLink.appendChild(twitterImg);

                const youtubeLink = document.createElement("a");
                youtubeLink.target = "_blank";
                youtubeLink.href = "https://www.youtube.com/";
                const youtubeImg = document.createElement("img");
                youtubeImg.src = "../img/youtubeLogo.png";
                youtubeImg.alt = "";
                youtubeLink.appendChild(youtubeImg);

                socialMediaOnLeftSticky.appendChild(facebookLink);
                socialMediaOnLeftSticky.appendChild(instagramLink);
                socialMediaOnLeftSticky.appendChild(twitterLink);
                socialMediaOnLeftSticky.appendChild(youtubeLink);

                socialMediaOnLeft.appendChild(socialMediaOnLeftSticky);


                var middleGrid = document.getElementById('Article-Middle-Grid');

                middleGrid.insertBefore(socialMediaOnLeft, middleGrid.firstChild);

            }
            if (document.getElementById("socialMediaOnArticle")) {
                const element = document.getElementById("socialMediaOnArticle");
                element.remove();
            }

        }
    }
};

applyStyles();

mediaQuery.addListener(applyStyles);