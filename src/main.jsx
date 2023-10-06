import React from 'react'
import ReactDOM from 'react-dom/client'
import { ComponenteContador } from './ComponenteContador'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponenteContador value = {0} />
  </React.StrictMode>,
)
