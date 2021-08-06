import './App.css';
import { React } from 'react'; // useEffect, useState
// import { Switch } from 'react-router-dom'; // Route, Redirect, useHistory,

import Header from '../Header/Header.js';
import Main from '../Main/Main';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Navigation from '../Navigation/Navigation.js';
import Register from '../Register/Register';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Main />
      <Movies />
      <SavedMovies />
      <Footer />
      <Register />
      <Login />
      <Profile />
		</div>
  );
}

export default App;
