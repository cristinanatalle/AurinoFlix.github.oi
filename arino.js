let movies = [];

function renderMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    movies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'movieCard';
        card.innerHTML = `<img src="${movie.cover}" alt="${movie.title}">
                          <h3>${movie.title}</h3>`;
        card.onclick = () => openMovieLink(movie.link);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Excluir';
        deleteButton.onclick = () => deleteMovie(index);
        card.appendChild(deleteButton);

        movieList.appendChild(card);
    });
}

function openForm() {
    document.getElementById('addMovieForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('addMovieForm').style.display = 'none';
}

function addMovie() {
    const title = document.getElementById('movieTitle').value;
    const cover = document.getElementById('movieCover').value;
    const link = document.getElementById('movieLink').value;

    movies.push({ title, cover, link });
    renderMovies();
    closeForm();
}

function deleteMovie(index) {
    movies.splice(index, 1);
    renderMovies();
}

function openMovieLink(link) {
    window.open(link, '_blank');
}


renderMovies();
