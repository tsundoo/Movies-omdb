document.addEventListener("DOMContentLoaded", function () {
  let filmDetails = localStorage.getItem("filmDetails");
  if (filmDetails) {
    let data = JSON.parse(filmDetails);
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
    <button id="clearCart">Remove</button>
    </div>
  </article>
      `;
    let filmDetailsContainer = document.getElementById('film-container');
    filmDetailsContainer.innerHTML = myHtml;

    document.getElementById("clearCart").addEventListener("click", function () {
      localStorage.removeItem("filmDetails");
      alert("Film removed from cart!");
      filmDetailsContainer.innerHTML = ""; // Clear the film details
    });
  } else {
    console.error("No film details found in localStorage.");
  }
});


