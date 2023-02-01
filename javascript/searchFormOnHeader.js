// Get the search form and input elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("searchInput");


const mediaQuery7 = window.matchMedia("(max-width: 720px)");

const applyStyles7 = () => {

    if (mediaQuery7.matches) {

        searchForm.addEventListener("click", function (event) {
            window.location = "./search.html?q=";
        })

    } else {
        console.log(' ');
    }
};

applyStyles7();

mediaQuery7.addListener(applyStyles7);


// Add a "submit" event listener to the form
searchForm.addEventListener("submit", (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the search query from the input
    const searchQuery = searchInput.value;

    // Redirect to the search page with the query on the URL
    // window.open("/search.html?q=" + searchQuery);
    window.location = "/search.html?q=" + searchQuery;

});