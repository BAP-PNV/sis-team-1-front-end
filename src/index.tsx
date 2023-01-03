import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import "./style/index.css"

import {BrowserRouter} from "react-router-dom"
import {DashboardRoutes} from "./router"

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
)

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <DashboardRoutes/>
      </BrowserRouter>
   </React.StrictMode>
)

reportWebVitals()