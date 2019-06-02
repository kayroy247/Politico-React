import React from 'react';
import { render } from 'react-dom';
import App from 'Containers/App';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import store from './store/index';
import './assets/app.css';

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
