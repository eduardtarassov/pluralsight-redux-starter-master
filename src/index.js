import 'babel-polyfill'; // babel transcribes ES6 to ES5. But polyfill is required for features which babel can't transcribe (object.assign).
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);
