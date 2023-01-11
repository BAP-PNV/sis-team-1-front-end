import {FileCard} from "../../component";
import {HTMLAttributes, useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";

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
          props.fileList ? props.fileList.map((file, index) => {
            return <a key={index} href={file.url} target={"_blank"}>
              <FileCard url={file.url} name={file.name}/>
            </a>
          }) : <div>Loading...</div>
        }
      </section>
    </section>
  )
}

export {SpaceFileContainer}