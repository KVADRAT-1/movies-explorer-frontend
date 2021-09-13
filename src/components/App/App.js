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
import { register, authorization, tokenValidity, updatesProfile } from '../../utils/MainApi.js'

function App() {
  const { pathname } = useLocation();
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [saveMovies, setSaveMovies] = useState([{
    duration: 61,
    id: 4,
    image: "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg",
    nameRU: "Bassweight",
    trailerLink: "https://www.youtube.com/watch?v=dgSyC6me-jQ",
  }])
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    _id: '',
  });

  const history = useHistory();

  function addSaveMovies(movie) {
    console.log('addSaveMovies')
  }

  function deleteSaveMovies(movie) {
    console.log('deleteSaveMovies')
  }

  function deleteMovies(movie) {
    console.log('deleteMovies')
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
          toSwitchLoggedIn()
          history.push('/movies');
				})
		}
	}

  function toSwitchLoggedIn() {
    setLoggedIn(!loggedIn)
  }

  useEffect(() => {
		checkToken()
	}, []);

  function logOutOfProfile() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }

  return (
    <div className='App'>
      {!(pathname === '/sign-in' || pathname === '/sign-up' || pathname === '/error') && <Header />}
      <Switch>
        <Route exact path='/error'>
          <Error />
        </Route>
        <Route exact path='/'>
          <ProtectedRoute 
            component={Main}
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path='/movies'>
          <ProtectedRoute 
            component={Movies}
            moviesRequest={moviesRequest}
            loggedIn={loggedIn}
            movies={movies}
            addSaveMovies={addSaveMovies}
            deleteSaveMovies={deleteSaveMovies}
          />
        </Route>
        <Route exact path='/saved-movies'>
          <ProtectedRoute 
            component={SavedMovies}
            loggedIn={loggedIn}
            saveMovies={saveMovies}
            deleteMovies={deleteMovies}
          />
        </Route>
        <Route exact path='/profile'>
          <ProtectedRoute 
            component={Profile}
            loggedIn={loggedIn}
            userData={userData}
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
		</div>
  );
}

export default App;
