import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import "./style/index.css"
import {SignUpPage} from "./pages"

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
)

root.render(
   <React.StrictMode>
      <SignUpPage/>
   </React.StrictMode>
)

reportWebVitals()