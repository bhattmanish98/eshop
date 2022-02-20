import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Stateprovider } from './StateProvider';
import reducer, {initialState} from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <Stateprovider initialState={initialState} reducer={reducer}>
      <App />
    </Stateprovider>
  </React.StrictMode>,
  document.getElementById('root')
);
