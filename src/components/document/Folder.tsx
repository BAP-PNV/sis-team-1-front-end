// import {FcFolder} from "react-icons/fc"

function Folder()
{
   return (
      <article className={"px-6 py-3 rounded-[7px] border hover:bg-green-50 flex gap-4 items-center"}>
         {/*<FcFolder size={100} className={"mb-1"}/>*/}
         <img className={"w-[25px]"} src="https://modernb.akamai.odsp.cdn.office.net/files/fabric-cdn-prod_20220825.001/assets/item-types/20/folder.svg" alt=""/>
         <span>This is a folder</span>
      </article>
   )
}

export {Folder}