import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './component/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>
  </BrowserRouter>
 
)
