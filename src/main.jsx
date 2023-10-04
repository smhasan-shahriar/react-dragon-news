import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes.jsx'
import MainAuth from './Authorization/MainAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainAuth>
      <RouterProvider router = {PublicRoutes}></RouterProvider>
    </MainAuth>
  </React.StrictMode>,
)
