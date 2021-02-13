// Question 1
// Convert the function below to an arrow function:

// function division(a, b) {
//  return a % b;
// }

const division = (a, b) => a % b;

// Question 2
// Make a call to the following API endpoint:
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

// Loop through the results and display the following properties in HTML, but only for the first eight results:

// name
// rating
// number of tags (not the tag details, just the amount of tags)

const url =
  'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';
const container = document.getElementById('container');

async function getGames() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(results);

    for (let i = 0; i < results.length; i++) {
      if (i === 8) {
        break;
      }
      container.innerHTML += `
      <div class="main-container">
        <div id="container-info">
            <p>Name: ${results[i].name}</p>
            <p>Rating: ${results[i].rating}</p>
            <p>Tags: ${results[i].tags.length}</p>
        </div>
      </div>`;
    }
  } catch (error) {
    container.innerHTML = `<p>Can not access API</p>`;
  }
}
getGames();

// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

const loading = function loadingTime() {
  loading = setTimeout(showGames, 1000);
};
loading();

function showGames() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('container').style.display = 'block';
}
showGames();
