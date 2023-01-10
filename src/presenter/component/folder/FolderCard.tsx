import {BiDotsVerticalRounded} from "react-icons/bi"

interface FolderCardProps
{
  id: string
  name: string
}

function FolderCard(props: FolderCardProps)
{
  return (
    <article className={"flex items-center justify-between px-3 py-2 border-gray-400 border-[1px] rounded"}>
      <div className={"flex items-center gap-5"}>
        <img className={"w-[23px]"} src="https://modernb.akamai.odsp.cdn.office.net/files/fabric-cdn-prod_20220825.001/assets/item-types/20/folder.svg" alt=""/>
        <p className={"text-[13px] line-clamp-1 whitespace-nowrap"}>{props.name}</p>
      </div>
    </article>
  )
}

export {FolderCard}