import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NavBar from './navBar.jsx'

import App from './App.jsx'
import HeroSection from './heroSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  
    <App />
  </StrictMode>,
)
