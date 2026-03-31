import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import A from './App.jsx'
import Z from './Z.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <A />
    <Z/>
  </StrictMode>,
)
