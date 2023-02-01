const searchFormFullScreen = document.getElementById("search-formFullScreen");
const searchInputFullScreen = document.getElementById("searchInputFullScreen");

if (searchFormFullScreen) {
  // Add a "submit" event listener to the form
  searchFormFullScreen.addEventListener("submit", (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the search query from the input
    const searchQuery = searchInputFullScreen.value;

    // Redirect to the search page with the query on the URL
    window.location.href = "search.html?q=" + searchQuery;
  });
}
