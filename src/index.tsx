import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import "./style/index.css"
import {DashboardPage} from "./pages"

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
)

root.render(
   <React.StrictMode>
      <DashboardPage/>
   </React.StrictMode>
)

reportWebVitals()