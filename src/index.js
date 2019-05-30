import React from 'react';
import { render } from 'react-dom';
import App from 'Containers/App';
import { Provider } from 'react-redux';
// import 'semantic-ui-css/semantic.min.css';
import Store from './store';
import './assets/app.css';

render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
