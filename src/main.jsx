import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './navBar.jsx'
import HeroSection from './heroSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <NavBar />
  <HeroSection />
    <App />
  </StrictMode>,
)
