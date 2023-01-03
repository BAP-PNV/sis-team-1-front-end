import {Route, Routes} from "react-router-dom"

function DashboardRoutes()
{
   return (
      <Routes>
         <Route path={"/"}>
            <Route path={"home"} element={<div>dsadsdsad</div>}>

            </Route>
         </Route>
      </Routes>
   )
}

export {DashboardRoutes}