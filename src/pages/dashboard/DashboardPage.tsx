import {SideBar} from "./SideBar"
import {Space} from "./Space"
import {DashboardHeader} from "./DashboardHeader";

function DashboardPage()
{
   return (
      <main className={"grid items-start grid-cols-[260px_1fr]"}>
         <div>
            <SideBar className={"w-[260px] fixed"}/>
         </div>
         <div>
            <DashboardHeader className={"fixed"}/>
            <Space className={"mt-20"}/>
         </div>
      </main>
   )
}

export {DashboardPage}