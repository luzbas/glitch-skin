import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GlitchDuoPage from './skins/ascii/GlitchDuoPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlitchDuoPage />
  </StrictMode>,
)
