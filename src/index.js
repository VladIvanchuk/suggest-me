import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import Home from './pages/Home/App';
import Details from "./pages/Details/Details";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>
);
