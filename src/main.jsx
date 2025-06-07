import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* No extra CSS here since <body> handles global layout */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
