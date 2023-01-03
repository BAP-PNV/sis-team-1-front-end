import {Route, Routes} from "react-router-dom"
import {DashboardLayout} from "../shareds"
import {Space} from "../pages/dashboard/Space"

function DashboardRouter()
{
   return (
      <Routes>
         <Route path={"/"}>
            <Route path={"/home"} element={<DashboardLayout/>}>
               <Route path={""} element={<Space/>}/>
            </Route>
         </Route>
      </Routes>
   )
}

export {DashboardRouter}