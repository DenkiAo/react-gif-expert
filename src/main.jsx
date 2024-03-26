import React from 'react';
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
// Importación general de un archivo CSS
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
