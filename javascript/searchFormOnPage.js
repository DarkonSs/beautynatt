const searchFormOnPage = document.getElementById('search-formOnPage')
const searchInputOnPage = document.getElementById('searchInputOnPage')

if (searchFormOnPage) {
  // Add a "submit" event listener to the form
  searchFormOnPage.addEventListener("submit", (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the search query from the input
    const searchQuery = searchInputOnPage.value;

    // Redirect to the search page with the query on the URL
    window.location.href = "search.html?q=" + searchQuery;
  });

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");

  if (query == '') {

    const mediaQuery6 = window.matchMedia("(max-width: 720px)");

    const applyStyles6 = () => {

      if (mediaQuery6.matches) {

        document.getElementById('searchOnPage').style.display = 'none'
        document.getElementById('searchFullScreen').style.display = 'initial'

      } else {

        document.getElementById('searchOnPage').style.display = 'flex'
        document.getElementById('searchFullScreen').style.display = 'none'

      }
    };

    applyStyles6();

    mediaQuery6.addListener(applyStyles6);

  } else if (query == null) {
    const mediaQuery6 = window.matchMedia("(max-width: 720px)");

    const applyStyles6 = () => {

      if (mediaQuery6.matches) {

        document.getElementById('searchOnPage').style.display = 'none'
        document.getElementById('searchFullScreen').style.display = 'initial'

      } else {

        document.getElementById('searchOnPage').style.display = 'flex'
        document.getElementById('searchFullScreen').style.display = 'none'

      }
    };

    applyStyles6();

    mediaQuery6.addListener(applyStyles6);
  }
}