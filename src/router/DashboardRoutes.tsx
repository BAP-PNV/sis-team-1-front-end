import {Route, Routes} from "react-router-dom"
import {DashboardLayout} from "../ui/layout";

function DashboardRoutes()
{
  return (
    <Routes>
      <Route path={"/"}>
        <Route path={"home"} element={<DashboardLayout/>}>

        </Route>
      </Route>
    </Routes>
  )
}

export {DashboardRoutes}