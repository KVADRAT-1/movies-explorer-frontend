export const getMovies = () => {
	return fetch('https://api.nomoreparties.co/beatfilm-movies', {
	}).then(response => {
        if (!response.ok) {
            return Promise.reject(`Error: ${response.status}`);
        }
        return response.json();
    }).then(response => {
        let movies = [];
        for(let i in response) {
          movies[i] =  {
                id: response[i].id,
                nameRU: response[i].nameRU,
                image: `https://api.nomoreparties.co${response[i].image.url}`,
                trailerLink: response[i].trailerLink,
                duration: response[i].duration,
            }
        }
        return movies;
    });
};



