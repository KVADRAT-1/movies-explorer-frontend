import './App.css';
import { React } from 'react'; // useEffect, useState
import { Switch } from 'react-router-dom'; // Route, Redirect, useHistory,

import Header from '../Header/Header.js';
import Main from '../Main/Main';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Header />
        <Main />
        <Footer />
      </Switch>
		</div>
  );
}

export default App;
