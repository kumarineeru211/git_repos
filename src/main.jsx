import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Sapp from './Sapp';
import Test from './Test';
import Stest from './componets/Stest';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Sapp/>
    <Test/>
    <Stest/>
  </React.StrictMode>,
)
