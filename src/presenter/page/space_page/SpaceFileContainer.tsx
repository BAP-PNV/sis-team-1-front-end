import {FileCard} from "../../component";
import {HTMLAttributes, useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import axios from "axios";
import {env} from "../../../constant";

type FileContainerProps =
{
  fileList: any[]
}

type FileContainerCustomProps = HTMLAttributes<HTMLDivElement> & FileContainerProps

function SpaceFileContainer(props: FileContainerCustomProps)
{
  return (
    <section className={twMerge(props.className, "")}>
      <h2 className={"text-2xl mb-3"}>Files</h2>
      <section className={"grid grid-cols-6 gap-4"}>
        {
          props.fileList.map((file, index) => {
            return <FileCard url={file.url} name={file.name} key={index}/>
          })
        }
      </section>
    </section>
  )
}

export {SpaceFileContainer}