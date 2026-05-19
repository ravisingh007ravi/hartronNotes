import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/DarkAndLight.jsx'
import { DataProvider } from './context/DataContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <ThemeProvider>
        <ToastContainer />
        <App />
      </ThemeProvider>
    </DataProvider>
  </StrictMode>,
)
