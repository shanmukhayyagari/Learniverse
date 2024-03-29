import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Import your main App component
import { Provider } from 'react-redux';
import store from './components/Redux/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
