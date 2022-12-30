import {twMerge} from "tailwind-merge"
import {VscFolder} from "react-icons/vsc"
import {TfiTime} from "react-icons/tfi"
import {BiCodeAlt} from "react-icons/bi"
import {Avatar} from "../../components"

interface SideBarProps
{
   className?: string
}

function SideBar(props: SideBarProps)
{
   return (
      <section className={twMerge("px-6 pt-5 border-r-[2px] border-gray-100 h-[100vh]", props.className)}>
         {/*<div className={"flex gap-3 mb-5"}>*/}
         {/*   <Avatar imgUrl={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}/>*/}
         {/*   <span className={"font-medium text-xl self-end"}>hi, Vu</span>*/}
         {/*</div>*/}
            <div className={"p-2 rounded-lg bg-green-600 text-white flex items-center gap-3"}>
               <VscFolder size={20}/>
               <span>My files</span>
            </div>
            <div className={"p-2 flex items-center gap-3"}>
               <TfiTime size={20}/>
               <span>Recent</span>
            </div>
            <div className={"p-2 flex items-center gap-3"}>
               <BiCodeAlt size={20}/>
               <span>Developer</span>
            </div>
      </section>
   )
}

export {SideBar}