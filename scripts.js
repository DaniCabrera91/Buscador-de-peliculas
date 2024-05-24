

const bearer_key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjQ2NDllYmFmMjI2MzcxZjliY2JhMzZmMDliYTE0YSIsInN1YiI6IjY2NGUyOWZkMWRhNGZkODBjYzlhY2QxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pt5xSXkiYY2wzEqkGo7x-9O5Ehdz4czBnOX1qqFFY04'
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const searchMovie = async (event) => {
    event.preventDefault()
   try {
       const search = searchInput.value
       const options = {
           method: 'GET',
           url: BASE_URL,
           params: {query: search},
           headers: {
             accept: 'application/json',
             Authorization: bearer_key,
           }
         };
         
         axios
           .request(options)
           .then(function (response) {
             console.log(response.data);
             showMovies(response.data)
           })
           .catch(function (error) {
             console.error(error);
           });
    
       }catch (error) {
    console.error(error)
    }
}

const getImages = async (event) => {
    

}

const movieCard = document.querySelector('#movieCard')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')

const showMovies = (movies) => {
    movieCard.innerHTML = ''
    movies.results.forEach((movie) => {
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

formSearch.addEventListener('submit', searchMovie)






  
 