import React, {HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";
import {IconButton} from "../../component"
import {CiTimer, CiLogout} from "react-icons/ci"
import {IoFolderOpenOutline} from "react-icons/io5"
import {BsCodeSlash} from "react-icons/bs"
import {Link, useLocation, useNavigate} from "react-router-dom"

type SideBarProps =
{

}

type SideBarCustomProps = HTMLAttributes<HTMLDivElement> & SideBarProps

function SideBar(props: SideBarCustomProps)
{
  const location = useLocation().pathname
  const nav = useNavigate()

  const logout = () => {
    localStorage.setItem("token", "")
    nav("/")
  }

  return (
    <div className={twMerge(props.className, "border-gray-300 border-r-[1px] py-5 px-4 bg-white")}>
      <p className={"mb-3 font-medium"}>Pham Le Thanh Vu</p>
      <nav className={"flex flex-col"}>
        <Link to={"space"}>
          <IconButton className={`${location.slice(0, 6) === "/space" ? "border-black rounded-md border-[1px]" : ""}`} icon={<IoFolderOpenOutline size={25}/>} title={"My Space"}/>
        </Link>
        <Link to={"recent"}>
          <IconButton className={`${location.slice(0, 7) === "/recent" ? "border-black rounded-md border-[1px]" : ""}`} icon={<CiTimer size={25}/>} title={"Recent"}/>
        </Link>
        <Link to={"dev"}>
          <IconButton className={`${location.slice(0, 4) === "/dev" ? "border-black rounded-md border-[1px]" : ""}`} icon={<BsCodeSlash size={25}/>} title={"Developer"}/>
        </Link>
        <IconButton onClick={logout} icon={<CiLogout size={25}/>} title={"log out"}/>
      </nav>
    </div>
  )
}

export {SideBar}