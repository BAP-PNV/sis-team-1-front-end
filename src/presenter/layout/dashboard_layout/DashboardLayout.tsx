import {SideBar} from "./SideBar"
import {Outlet, useNavigate} from "react-router-dom"
import {useEffect} from "react"

function DashboardLayout()
{
  const isAuth = localStorage.getItem("token")
  const nav = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      nav("/sign-in")
    }
  }, [])

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