import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './Context/WorkoutsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WorkoutsContextProvider>
    <App />
  </WorkoutsContextProvider>
);


