import './App.css';
import { React } from 'react';
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

const loggedIn = true;

function App() {
  const { pathname } = useLocation();
  return (
    <div className='App'>
      {!(pathname === '/sign-in' || pathname === '/sign-up') && <Header />}
      <Switch>
        <Route exact path='/'>
          <ProtectedRoute 
            component={Main}
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path='/movies'>
          <ProtectedRoute 
            component={Movies}
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path='/saved-movies'>
          <ProtectedRoute 
            component={SavedMovies}
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path='/profile'>
          <ProtectedRoute 
            component={Profile}
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path='/sign-up'>
          <Register />
        </Route>
        <Route exact path='/sign-in'>
          <Login />
        </Route>
      </Switch>
      {!(pathname === '/profile' || pathname === '/sign-in' || pathname === '/sign-up') && <Footer />}
		</div>
  );
}

export default App;
