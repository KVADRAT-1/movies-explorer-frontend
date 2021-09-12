import './App.css';
import { React, useState } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';

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
  const [loggedIn, setLoggedIn] = useState(true);
  const [saveMovies, setSaveMovies] = useState([{
    duration: 61,
    id: 4,
    image: "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg",
    nameRU: "Bassweight",
    trailerLink: "https://www.youtube.com/watch?v=dgSyC6me-jQ",
  }])

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
    register(userRegistrationData).then(response => {
      console.log(response)
    })
  }

  function loginUser(userLoginData) {
    authorization(userLoginData).then(response => {
      console.log(response)
    })
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
