import './style/normalize.css';
import './fonts/inter.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';

ReactDOM.render(
  	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
  document.getElementById('root')
);
