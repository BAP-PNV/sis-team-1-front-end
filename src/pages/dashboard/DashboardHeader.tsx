import {twMerge} from "tailwind-merge";

interface DashboardHeaderProps
{
   className?: string
}

function DashboardHeader(props: DashboardHeaderProps)
{
   return (
      <div className={twMerge("flex gap-3 border-b-2 p-5 bg-white w-full border-gray-100", props.className)}>
         <span>vu</span>
         <span>/</span>
         <span>laravel</span>
         <span>/</span>
         <span className={"font-bold underline"}>the fraking PHP</span>
      </div>
   )
}

export {DashboardHeader}