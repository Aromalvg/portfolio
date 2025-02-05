import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './index.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
