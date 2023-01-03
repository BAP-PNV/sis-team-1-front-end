import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import "./style/index.css"
import {DashboardRouter} from "./routes"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
)

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <DashboardRouter/>
      </BrowserRouter>
   </React.StrictMode>
)

reportWebVitals()