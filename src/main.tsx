import React from 'react'
import ReactDOM from 'react-dom/client'
import { RowProvider } from './context/RowContext.tsx'
import { ModalProvider } from './context/ModalContext.tsx'
import App from './App.tsx'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RowProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </RowProvider>
  </React.StrictMode>
)
