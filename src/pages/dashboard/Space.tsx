import {File, Folder} from "../../components"
import {twMerge} from "tailwind-merge";

interface SpaceProps
{
   className?: string
}

function Space(props: SpaceProps)
{
   return (
      <section className={twMerge("p-5 flex flex-col gap-16", props.className)}>
         <div className={""}>
            <h2 className={"mb-3 text-xl ml-4"}>Folders</h2>
            <section className={"grid grid-cols-6 gap-4"}>
               <Folder/>
               <Folder/>
               <Folder/>
               <Folder/>
               <Folder/>
               <Folder/>
               <Folder/>
               <Folder/>
               <Folder/>
               <Folder/>
            </section>
         </div>
         <div className={""}>
            <h2 className={"mb-3 text-xl ml-4"}>Files</h2>
            <section className={"grid grid-cols-6 gap-4"}>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
               <File/>
            </section>
         </div>
      </section>
   )
}

export {Space}
