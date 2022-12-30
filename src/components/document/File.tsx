import {BsFillImageFill} from "react-icons/bs"

function File()
{
   return (
      <article className={"flex flex-col overflow-hidden rounded-[7px] border hover:bg-gray-100"}>
         <img className={"h-[220px] object-cover w-full"} src="https://images.unsplash.com/photo-1672092301021-3d810610010f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80" alt=""/>
         <div className={"px-4 py-3 flex items-center gap-3"}>
            <BsFillImageFill color={"red"} size={20}/>
            <div>this is a file</div>
         </div>
      </article>
   )
}

export {File}