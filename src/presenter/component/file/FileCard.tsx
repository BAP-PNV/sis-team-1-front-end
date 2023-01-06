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

  return (
    <article className={twMerge(props.className, "relative border-gray-400 border-[1px] rounded")}>
      <img className={"h-[200px] w-full object-cover"} src={props.url} alt=""/>
      <section className={"flex items-center justify-between p-2"}>
        <div className={"flex items-center gap-5"}>
          <BsCardImage color={"green"}/>
          <span className={"text-[12px]"}>{props.name}</span>
        </div>
        <BiDotsVerticalRounded/>
      </section>
      {/*<div className={"absolute z-10 p-2 rounded left-[90%] top-[90%] w-[100%] bg-gray-100"}>*/}
      {/*  this is a menu can you see*/}
      {/*</div>*/}
    </article>
  )
}

export {FileCard}