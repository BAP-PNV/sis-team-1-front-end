import {FileCard} from "../../component";
import {HTMLAttributes, useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import axios from "axios";
import {env} from "../../../constant";

type FileContainerProps =
{

}

type FileContainerCustomProps = HTMLAttributes<HTMLDivElement> & FileContainerProps

function SpaceFileContainer(props: FileContainerCustomProps)
{
  const divProps: HTMLAttributes<HTMLDivElement> = props
  const fileContainerProps: FileContainerProps = props

  return (
    <section {...divProps} className={twMerge(divProps.className, "")}>
      <h2 className={"text-2xl mb-3"}>Files</h2>
      <section className={"grid grid-cols-6 gap-4"}>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
        <FileCard/>
      </section>
    </section>
  )
}

export {SpaceFileContainer}