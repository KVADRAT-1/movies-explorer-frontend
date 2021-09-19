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

import { getMovies } from '../../utils/MoviesApi.js'
import { register, authorization, tokenValidity, updatesProfile, createMovie, returnMovies, deleteMovies } from '../../utils/MainApi.js'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function App() {
  const { pathname } = useLocation();
  const [inputTextMovies, setInputTextMovies] = useState('');
  const [inputTextSaveMovies, setInputTextSaveMovies] = useState('');
  const [filterSaveMovies, setFilterSaveMovies] = useState(false);

  const [maxLengthListMovies, setMaxLengthListMovies] = useState(12);
  const [maxLengthListSaveMovies, setMaxLengthListSaveMovies] = useState(12);
  const [filterMovies, setFilterMovies] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [saveMovies, setSaveMovies] = useState([])
  const [saveMoviesId, setSaveMoviesId] = useState([])
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    _id: '',
  });

  const history = useHistory();

  // localStorage.setItem('jwt', res.token);
  // const jwt = localStorage.getItem('jwt');

  function switchFilterMovies() {
    setFilterMovies(!filterMovies);
  }

  function switchFilterSaveMovies() {
    setFilterSaveMovies(!filterSaveMovies);
  }

  function checkToken() {
		const jwt = localStorage.getItem('jwt');
		if (jwt) {
      tokenValidity(jwt)
				.then(res => {
					const { name, email, _id } = res.user;
					setUserData({
            name: name,
						email: email,
						_id: _id,
					});
          retMovies()
          setLoggedIn(true)
          history.push('/movies');
				})
		}
	}

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const currentUserSaveMovies = JSON.parse(localStorage.getItem('currentUserSaveMovies'));
    const currentUserSaveMoviesId = JSON.parse(localStorage.getItem('currentUserSaveMoviesId'));
    if (jwt) {
      console.log('1')
      setLoggedIn(true)
      history.push('/movies');
      setUserData(user)
      setSaveMovies(currentUserSaveMovies)
      setSaveMoviesId(currentUserSaveMoviesId)
    }
	}, []);

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(userData));
	}, [userData]);

  useEffect(() => {
    localStorage.setItem('currentUserSaveMovies', JSON.stringify(saveMovies));
    localStorage.setItem('currentUserSaveMoviesId', JSON.stringify(saveMoviesId));
	}, [saveMovies, saveMoviesId]);

  function addSaveMovies(movie) {
    const jwt = localStorage.getItem('jwt');
    createMovie(movie, userData._id, jwt).then(response => {
      const newMovie = {
        duration: response.movie.duration,
        image: response.movie.image,
        nameRU: response.movie.nameRU,
        trailerLink: response.movie.trailer,
        _id: response.movie.movieId,
        serverId: response.movie._id,
      }
      setSaveMovies((oldItems) => [...oldItems, newMovie])
      setSaveMoviesId((oldItems) => [...oldItems, response.movie.movieId])
    })
  }

  function retMovies() {
    const jwt = localStorage.getItem('jwt');
    returnMovies(jwt).then(response => {
      response.movies.map((movie) => {
        if (userData._id === movie.owner) {
          const newMovie = {
            duration: movie.duration,
            image: movie.image,
            nameRU: movie.nameRU,
            trailerLink: movie.trailer,
            _id: movie.movieId,
            serverId: movie._id,
          }
          setSaveMovies((oldItems) => [...oldItems, newMovie])
          setSaveMoviesId((oldItems) => [...oldItems, movie.movieId])
        }
      })
    })
  }

  function delMovie(movieId) {
    const jwt = localStorage.getItem('jwt');
    saveMovies.map((movie) => {
      if (movie._id === movieId) {
        deleteMovies(jwt, movie.serverId).then(response => {
          setSaveMovies(saveMovies.filter(obj => obj._id !== response.movieUser.movieId));
          setSaveMoviesId(saveMoviesId.filter(obj => obj !== response.movieUser.movieId));
        });
      }
    })
  }

  function moviesRequest() {
    getMovies().then(response => {
      setMovies(response)
    })
  }

  function registerUser(userRegistrationData) {
    register(userRegistrationData).then(data => {
      loginUser({email: data.email, password: userRegistrationData.password})
    })
  }

  function loginUser(userLoginData) {
    authorization(userLoginData).then(res => {
      localStorage.setItem('jwt', res.token);
      checkToken()
    })
  }

  function changeProfile(newUserData) {
    const jwt = localStorage.getItem('jwt');
    updatesProfile({name: newUserData.name, email: newUserData.email, token: jwt}).then(data => {
      setUserData({
        name: data.user.name,
        email: data.user.email,
        _id: data.user._id,
      });
    })
  }

  function logOutOfProfile() {
    localStorage.clear();
    setLoggedIn(false)
    history.push('/');
  }

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={userData}>
        {!(pathname === '/sign-in' || pathname === '/sign-up' || pathname === '/error') && <Header loggedIn={loggedIn}/>}
        <Switch>
          <Route exact path='/error'>
            <Error />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/movies'>
            <ProtectedRoute 
              component={Movies}
              moviesRequest={moviesRequest}
              loggedIn={loggedIn}
              movies={movies}
              addSaveMovies={addSaveMovies}
              saveMoviesId={saveMoviesId}
              delMovie={delMovie}
              switchFilterMovies={switchFilterMovies}
              filterMovies={filterMovies}
              inputTextMovies={inputTextMovies}
              setInputTextMovies={setInputTextMovies}
              maxLengthListMovies={maxLengthListMovies}
              setMaxLengthListMovies={setMaxLengthListMovies}
            />
          </Route>
          <Route exact path='/saved-movies'>
            <ProtectedRoute 
              component={SavedMovies}
              loggedIn={loggedIn}
              saveMovies={saveMovies}
              delMovie={delMovie}
              switchFilterSaveMovies={switchFilterSaveMovies}
              filterSaveMovies={filterSaveMovies}
              inputTextSaveMovies={inputTextSaveMovies}
              setInputTextSaveMovies={setInputTextSaveMovies}
              maxLengthListSaveMovies={maxLengthListSaveMovies}
              setMaxLengthListSaveMovies={setMaxLengthListSaveMovies}
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
            <Register 
              registerUser={registerUser}
            />
          </Route>
          <Route exact path='/sign-in'>
            <Login 
              loginUser={loginUser}
            />
          </Route>
        </Switch>
        {!(pathname === '/profile' || pathname === '/sign-in' || pathname === '/sign-up' || pathname === '/error') && <Footer />}
      </CurrentUserContext.Provider>
		</div>
  );
}

export default App;
