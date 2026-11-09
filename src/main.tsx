import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GlitchPage from './skins/ascii/GlitchPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlitchPage />
  </StrictMode>,
)
