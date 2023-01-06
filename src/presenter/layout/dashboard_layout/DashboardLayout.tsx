import {SideBar} from "./SideBar"
import {Outlet} from "react-router-dom"

function DashboardLayout()
{
  return (
    <div className={"grid grid-cols-[280px_1fr]"}>
      <div className={"w-[280px]"}>
        <SideBar className={"fixed w-[280px] h-[100vh]"}/>
      </div>
      <Outlet/>
    </div>
  )
}

export {DashboardLayout}