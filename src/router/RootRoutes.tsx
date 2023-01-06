import {Route, Routes} from "react-router-dom"
import {DashboardLayout} from "../presenter/layout"
import {SpacePage, RecentPage, AuthPage, RegisterPage, ConfirmPage, HomePage, DevPage} from "../presenter/page"

function RootRoutes()
{
  return (
    <Routes>
      <Route path={"/"}>

        <Route path={""} element={<HomePage/>}/>

        <Route path={""} element={<DashboardLayout/>}>
          <Route path={"space"} element={<SpacePage/>}/>
          <Route path={"space/:folderId"} element={<SpacePage/>}/>
          <Route path={"recent"} element={<RecentPage/>}/>
          <Route path={"dev"} element={<DevPage/>}/>
        </Route>

        <Route path={"sign-in"} element={<AuthPage/>}/>
        <Route path={"sign-up"} element={<RegisterPage/>}/>
        <Route path={"confirm-account"} element={<ConfirmPage/>}/>

      </Route>
    </Routes>
  )
}

export {RootRoutes}