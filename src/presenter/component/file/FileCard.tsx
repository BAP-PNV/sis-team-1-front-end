import {HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";
import {BsCardImage} from "react-icons/bs"
import {BiDotsVerticalRounded} from "react-icons/bi"

type FileCardProps =
{
  url: string
  name: string
}

type FileCardCustomProps = HTMLAttributes<HTMLDivElement> & FileCardProps

function FileCard(props: FileCardCustomProps)
{
  const openFile = () => {
    const rawRecentFile = localStorage.getItem("recent")

    let recentFiles = []

    if (rawRecentFile) {
      recentFiles = JSON.parse(rawRecentFile) as any[]
    }

    // recentFiles.forEach((value: any, index: number, array) => {
    //   if (value.url === props.url) {
    //     recentFiles.slice(index, 1)
    //     return
    //   }
    // })

    recentFiles = recentFiles.filter((item) => item.url !== props.url)

    recentFiles.unshift({
      url: props.url,
      name: props.name
    })

    localStorage.setItem("recent", JSON.stringify(recentFiles))
  }

  return (
    <article onClick={openFile} className={twMerge(props.className, "relative border-gray-400 border-[1px] rounded")}>
      <img className={"h-[200px] w-full object-cover"} src={props.url} alt=""/>
      <section className={"flex items-center justify-between p-2"}>
        <div className={"flex items-center gap-5"}>
          <BsCardImage color={"green"}/>
          <span className={"text-[12px] line-clamp-1"}>{props.name}</span>
        </div>
      </section>
      {/*<div className={"absolute z-10 p-2 rounded left-[90%] top-[90%] w-[100%] bg-gray-100"}>*/}
      {/*  this is a menu can you see*/}
      {/*</div>*/}
    </article>
  )
}

export {FileCard}