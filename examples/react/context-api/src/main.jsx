import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CountProvider } from './store/CountContext.jsx'
import { FormProvider } from './store/FormContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </CountProvider>
  </React.StrictMode>,
)
