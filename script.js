// selecting the button and placing it in varaible (button)
let button = document.getElementById('btn');

// adding the eventlistener to the button 
button.addEventListener('click', (e) => {
  e.preventDefault();

  // declaring my apikey
  let myApi = 'a2d5bb6e';
  // selecting my input field and its value inside 
  let searchInput = document.getElementById('input').value;
  // modifying the url adding the apikey and the searchInput
  let url = `http://www.omdbapi.com/?apikey=${myApi}&s=${searchInput}`;

  // creating a function to fetch the data in json
  function fetchFilm(){
    fetch(url) 
    .then(response => response.json())
    .then(data => {
      const films = data.Search;

      // selecting the div to display the data 
      document.getElementById("Content").innerHTML = "";
      // iterating a loop in the fetch data
      for (const film of films) {
        const myHtml = `
                  <article>
                  <a href="./details/detail.html?id=${film.imdbID}">
                  <img src="${film.Poster}" alt="${film.Title}">
                  </a>
                        <h2>${film.Title}</h2>
                        <p>Year: ${film.Year}</p>
                        <p>Type: ${film.Type}</p> 
                        <a href="./details/detail.html?id=${film.imdbID}">more info</a>
                    </article>`;
        document.getElementById("Content").innerHTML += myHtml;
      }
    })
    .catch (error => console.error('error', error))
  }
  // launching my function 
  fetchFilm()
})

