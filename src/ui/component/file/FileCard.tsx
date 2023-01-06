import {HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";
import {BsCardImage} from "react-icons/bs"
import {BiDotsVerticalRounded} from "react-icons/bi"

type FileCardProps =
{

}

type FileCardCustomProps = HTMLAttributes<HTMLDivElement> & FileCardProps

function FileCard(props: FileCardCustomProps)
{
  const divProps: HTMLAttributes<HTMLDivElement> = props
  const fileCardProps: FileCardProps = props

  return (
    <article {...divProps} className={twMerge(divProps.className, "relative border-gray-400 border-[1px] rounded")}>
      <img className={"h-[200px] w-full object-cover"} src="https://plus.unsplash.com/premium_photo-1671749233342-20b24c04ba7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>
      <section className={"flex items-center justify-between p-2"}>
        <div className={"flex items-center gap-5"}>
          <BsCardImage color={"green"}/>
          <span className={"text-[12px]"}>this is a image</span>
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