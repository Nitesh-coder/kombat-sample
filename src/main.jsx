import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MenuWrapper } from './Context/MenuContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuWrapper>
      <App />
    </MenuWrapper>
  </StrictMode>,
)
