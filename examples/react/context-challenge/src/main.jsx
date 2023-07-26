import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { CandidateProvider } from './store/CandidateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CandidateProvider>
      <App />
    </CandidateProvider>
  </React.StrictMode>,
);
