import './App.css';
import { React } from 'react'; // useEffect, useState
import { Switch, Route } from 'react-router-dom'; // Redirect, useHistory,

import Header from '../Header/Header.js';
import Main from '../Main/Main';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/movies'>
          <Movies />
        </Route>
        <Route exact path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/signin'>
          <Register />
        </Route>
        <Route exact path='/signin'>
          <Login />
        </Route>
      </Switch>
      <Footer />
		</div>
  );
}

export default App;
