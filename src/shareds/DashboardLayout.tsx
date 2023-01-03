import {SideBar} from "../pages/dashboard/SideBar";
import {Outlet} from "react-router"
import {DashboardHeader} from "../pages/dashboard/DashboardHeader";

interface DashboardLayoutProps
{
   className?: string
}

function DashboardLayout(props: DashboardLayoutProps)
{
   return (
      <div>
         <main className={"grid items-start grid-cols-[260px_1fr]"}>
            <div>
               <SideBar className={"w-[260px] fixed"}/>
            </div>
            <div>
               {/*<DashboardHeader className={"fixed"}/>*/}
               {/*<Space className={"mt-20"}/>*/}
               <Outlet/>
            </div>
         </main>
      </div>
   )
}

export {DashboardLayout}