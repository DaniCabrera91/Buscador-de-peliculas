const api_key = 'api_key=324649ebaf226371f9bcba36f09ba14a'
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const movieCard = document.querySelector('#movieCard')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')

const showMovies = (movies) => {
    movieCard.innerHTML = ''
    movies.forEach((movie) => {
    movieCard.innerHTML += `
    <div class="card col-lg-3 col-xs-12 col-md-6 m-2">
    <img src="${movie.poster_path}" alt="${movie.original_title}">
    <div class="card-bod">
    <h3 class="card-header">${movie.original_title}</h3>
    <h5 class="card-title">${movie.genres}</h5>
    <p class="card-title">${movie.overview}</p>
    </div>
    </div>
    `
    })
}

const searchMovie = async (event) => {
    event.preventDefault()
    try {
    const search = searchInput.value
    const response = await axios.get(`${API_URL}/?movie=${search}`)
    const movies = response.data.results
    showMovies(movies)
    } catch (error) {
    console.error(error)
    }
}

formSearch.addEventListener('submit', searchMovie)
