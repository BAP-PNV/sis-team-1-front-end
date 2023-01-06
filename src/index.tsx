import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import "./style/index.css"

import {BrowserRouter} from "react-router-dom"
import {RootRoutes} from "./router"

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
)

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <RootRoutes/>
      </BrowserRouter>
   </React.StrictMode>
)

reportWebVitals()