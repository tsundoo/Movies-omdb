
function filmDeails(){
  let myApi = 'a2d5bb6e';
  let myId = new URLSearchParams (window.location.search).get('id');
  let url = `https://www.omdbapi.com/?apikey=${myApi}&i=${myId}`;

  fetch (url)
  .then (response => response.json())
  .then (data => {

    localStorage.setItem('filmDetails', JSON.stringify(data));

    let myHtml = `
   <article>
    <div class="poster">
    <img src="${data.Poster}" alt="Poster de ${data.Title}">
    </div>
    <div class="details">
    <h2>${data.Title}</h2>
    <p><strong>Year:</strong> ${data.Year}</p>
    <p><strong>Type:</strong> ${data.Type}</p>
    <p><strong>Released:</strong> ${data.Released}</p>
    <p><strong>Director:</strong> ${data.Director}</p>
    <p><strong>Actors:</strong> ${data.Actors}</p>
    <p><strong>Genre:</strong> ${data.Genre}</p>
    <p class="plot"><strong>Plot:</strong> ${data.Plot}</p>
    <button id="saveFilm">Add to LocalStorage</button>
    </div>
  </article>
    `
    document.getElementById('film-details').innerHTML += myHtml;

    document.getElementById('saveFilm').addEventListener('click', function(){
      window.location.href = "../localeStorage/localeStorage.html";
    })
  })
  .catch (error => console.error('error', error))
}

filmDeails()