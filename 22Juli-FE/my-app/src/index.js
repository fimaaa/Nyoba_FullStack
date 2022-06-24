import React from 'react';
import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { appReducers, initialState} from './redux/reducers';
import { AppStateProvider } from './contexts/appState';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  //  <Provider store={store}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>
  <React.StrictMode>
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <App />
    </AppStateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

