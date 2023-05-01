import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./states/store";

import {  RecoilRoot} from 'recoil';
import { RecoilDebugObserver } from './states/RecoilDebugObserver';
// import 'recoilize'; //needed for debugging in browser
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <RecoilRoot>
     {process.env.NODE_ENV !== 'production' && process.env.REACT_APP_SHOW_RECOIL_DEBUGGER &&  <RecoilDebugObserver />  }
      <App />
      </RecoilRoot>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
