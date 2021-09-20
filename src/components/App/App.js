import './App.css';
import { React, useState, useEffect } from 'react';
import { useLocation, Switch, Route, useHistory } from 'react-router-dom';

import ProtectedRoute from '../reusableComponents/ProtectedRoute.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import Error from '../Error/Error.js';
import Popup from '../Popup/Popup.js';

import { getMovies } from '../../utils/MoviesApi.js'
import { register, authorization, tokenValidity, updatesProfile, createMovie, returnMovies, deleteMovies } from '../../utils/MainApi.js'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function App() {
  const { pathname } = useLocation();
  const [openPopup, setOpenPopup] = useState(false);
  const [popupText, setPopupText] = useState('');
  const [inputTextMovies, setInputTextMovies] = useState('');
  const [inputTextSaveMovies, setInputTextSaveMovies] = useState('');
  const [filterSaveMovies, setFilterSaveMovies] = useState(false);
  const [maxLengthListMovies, setMaxLengthListMovies] = useState(12);
  const [maxLengthListSaveMovies, setMaxLengthListSaveMovies] = useState(12);
  const [preloaderMovies, setPreloaderMovies] = useState(false)
  const [filterMovies, setFilterMovies] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [submitMovies, setSubmitMovies] = useState(false);
  const [submitSaveMovies, setSubmitSaveMovies] = useState(false);
  const [moviesAll, setMoviesAll] = useState([]);
  const [saveMoviesAll, setSaveMoviesAll] = useState([])
  const [movies, setMovies] = useState([]);
  const [saveMovies, setSaveMovies] = useState([])
  const [saveMoviesId, setSaveMoviesId] = useState([])
  const [currentUser, setCurrentUser] = useState({});

  const textError = 'Во время запроса произошла ошибка. '
  const history = useHistory();

  useEffect(() => {
    let moviesFilter = []
    if (filterMovies) {
      moviesAll.map((movie) => {
        if (movie.duration <= 40) {
          if (!(movie.nameRU.match(inputTextMovies) === null)) {
            moviesFilter.push(movie)
          }
        }
      })
    } else {
      moviesAll.map((movie) => {
        if (!(movie.nameRU.match(inputTextMovies) === null)) {
          moviesFilter.push(movie)
        }
      })
    }
    setMovies(moviesFilter)
	}, [moviesAll, filterMovies, submitMovies]);

  useEffect(() => {
    let moviesFilter = []
    if (filterSaveMovies) {
      if (inputTextSaveMovies === '') {
        saveMoviesAll.map((movie) => {
          if (movie.duration <= 40) {
            moviesFilter.push(movie)
          }
        })
      } else {
        saveMoviesAll.map((movie) => {
          if (movie.duration <= 40) {
            if (!(movie.nameRU.match(inputTextSaveMovies) === null)) {
              moviesFilter.push(movie)
            }
          }
        })
      }
    } else if (inputTextSaveMovies !== '') {
      saveMoviesAll.map((movie) => {
        if (!(movie.nameRU.match(inputTextSaveMovies) === null)) {
          moviesFilter.push(movie)
        }
      })
    } else {
      moviesFilter = saveMoviesAll
    }
    setSaveMovies(moviesFilter)
	}, [saveMoviesAll, filterSaveMovies, submitSaveMovies]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const currentUserSaveMovies = JSON.parse(localStorage.getItem('currentUserSaveMovies'));
    const currentUserSaveMoviesId = JSON.parse(localStorage.getItem('currentUserSaveMoviesId'));
    setLoggedIn(true)
    history.push('/movies');
    setCurrentUser(user)
    setSaveMoviesAll(currentUserSaveMovies)
    setSaveMoviesId(currentUserSaveMoviesId)
    }
	}, []);

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}, [currentUser]);

  useEffect(() => {
    localStorage.setItem('currentUserSaveMovies', JSON.stringify(saveMoviesAll));
    localStorage.setItem('currentUserSaveMoviesId', JSON.stringify(saveMoviesId));
	}, [saveMoviesAll]);

  function registerUser(userRegistrationData) {
    register(userRegistrationData).then(data => {
      loginUser({email: data.email, password: userRegistrationData.password})
    })
    .catch(error => {
      showPopup(`${textError}${error}`)
    });
  }

  function loginUser(userLoginData) {
    authorization(userLoginData).then(res => {
      localStorage.setItem('jwt', res.token);
      checkToken()
    })
    .catch(error => {
      showPopup(`${textError}${error}`)
    });
  }

  function checkToken() {
		const jwt = localStorage.getItem('jwt');
		if (jwt) {
      tokenValidity(jwt)
				.then(res => {
          const data = {
            name: res.user.name,
						email: res.user.email,
						_id: res.user._id,
					}
          localStorage.setItem('currentUser', JSON.stringify(data));
					setCurrentUser(data);
          setLoggedIn(true)
          history.push('/movies');
          retMovies()
			})
      .catch(error => {
        showPopup(`${textError}${error}`)
      });
		}
	}

  function retMovies() {
    const jwt = localStorage.getItem('jwt');
    returnMovies(jwt).then(response => {
      response.movies.map((movie) => {
        if (currentUser._id === movie.owner) {
          const newMovie = {
            duration: movie.duration,
            image: movie.image,
            nameRU: movie.nameRU,
            trailerLink: movie.trailer,
            _id: movie.movieId,
            serverId: movie._id,
          }
          localStorage.setItem('currentUserSaveMovies', JSON.stringify(newMovie));
          localStorage.setItem('currentUserSaveMoviesId', JSON.stringify(movie.movieId));
          setSaveMoviesAll((oldItems) => [...oldItems, newMovie])
          setSaveMoviesId((oldItems) => [...oldItems, movie.movieId])
        }
      })
    })
    .catch(error => {
      showPopup(`${textError}${error}`)
    });
  }

  function addSaveMovies(movie) {
    const jwt = localStorage.getItem('jwt');
    createMovie(movie, currentUser._id, jwt).then(response => {
      const newMovie = {
        duration: response.movie.duration,
        image: response.movie.image,
        nameRU: response.movie.nameRU,
        trailerLink: response.movie.trailer,
        _id: response.movie.movieId,
        serverId: response.movie._id,
      }
      setSaveMoviesAll((oldItems) => [...oldItems, newMovie])
      setSaveMoviesId((oldItems) => [...oldItems, response.movie.movieId])
    })
    .catch(error => {
      showPopup(`${textError}${error}`)
    });
  }

  function delMovie(movieId) {
    const jwt = localStorage.getItem('jwt');
    saveMoviesAll.map((movie) => {
      if (movie._id === movieId) {
        deleteMovies(jwt, movie.serverId).then(response => {
          setSaveMoviesAll(saveMoviesAll.filter(obj => obj._id !== response.movieUser.movieId));
          setSaveMoviesId(saveMoviesId.filter(obj => obj !== response.movieUser.movieId));
        })
        .catch(error => {
          showPopup(`${textError}${error}`)
        });
      }
    })
  }

  function moviesRequest() {
    getMovies().then(response => {
      setMoviesAll(response)
      setPreloaderMovies(false)
    })
    .catch(error => {
      showPopup(`${textError}${error}`)
    });
  }

  function changeProfile(newUserData) {
    const jwt = localStorage.getItem('jwt');
    updatesProfile({name: newUserData.name, email: newUserData.email, token: jwt}).then(data => {
      showPopup('Данные вашего аккаунта изменены')
      setCurrentUser({
        name: data.user.name,
        email: data.user.email,
        _id: data.user._id,
      });
    })
    .catch(error => {
      showPopup(`${textError}${error}`)
    });
  }

  function showPopup(text) {
    setPopupText(text)
    setOpenPopup(true)
  }
  
  function logOutOfProfile() {
    localStorage.clear();
    setLoggedIn(false)
    history.push('/');
  }
  
  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        
        {!(pathname === '/sign-in' || pathname === '/sign-up' || pathname === '/error') && <Header loggedIn={loggedIn}/>}
        <Popup 
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          popupText={popupText}
        />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/movies'>
            <ProtectedRoute 
              moviesAll={moviesAll}
              component={Movies}
              submitMovies={submitMovies}
              setSubmitMovies={setSubmitMovies}
              moviesRequest={moviesRequest}
              loggedIn={loggedIn}
              movies={movies}
              addSaveMovies={addSaveMovies}
              saveMoviesId={saveMoviesId}
              delMovie={delMovie}
              setFilterMovies={setFilterMovies}
              filterMovies={filterMovies}
              inputTextMovies={inputTextMovies}
              setInputTextMovies={setInputTextMovies}
              maxLengthListMovies={maxLengthListMovies}
              setMaxLengthListMovies={setMaxLengthListMovies}
              setPreloaderMovies={setPreloaderMovies}
              preloaderMovies={preloaderMovies}
            />
          </Route>
          <Route exact path='/saved-movies'>
            <ProtectedRoute 
              component={SavedMovies}
              loggedIn={loggedIn}
              saveMovies={saveMovies}
              delMovie={delMovie}
              filterSaveMovies={filterSaveMovies}
              setFilterSaveMovies={setFilterSaveMovies}
              inputTextSaveMovies={inputTextSaveMovies}
              setInputTextSaveMovies={setInputTextSaveMovies}
              maxLengthListSaveMovies={maxLengthListSaveMovies}
              setMaxLengthListSaveMovies={setMaxLengthListSaveMovies}
              submitSaveMovies={submitSaveMovies}
              setSubmitSaveMovies={setSubmitSaveMovies}
            />
          </Route>
          <Route exact path='/profile'>
            <ProtectedRoute 
              component={Profile}
              loggedIn={loggedIn}
              logOutOfProfile={logOutOfProfile}
              changeProfile={changeProfile}
            />
          </Route>
          <Route exact path='/sign-up'>
            <ProtectedRoute
              component={Register}
              loggedIn={!loggedIn}
              registerUser={registerUser}
            />
          </Route>
          <Route exact path='/sign-in'>
          <ProtectedRoute
              component={Login}
              loggedIn={!loggedIn}
              loginUser={loginUser}
            />
          </Route>
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
        {!(pathname === '/profile' || pathname === '/sign-in' || pathname === '/sign-up' || pathname === '/error') && <Footer />}
      </CurrentUserContext.Provider>
		</div>
  );
}

export default App;
