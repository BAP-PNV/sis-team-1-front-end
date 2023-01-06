import {FileCard} from "../../component";
import {HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";

type RecentFileContainerProps =
{

}

type RecentFileContainerCustomProps = HTMLAttributes<HTMLDivElement> & RecentFileContainerProps

function RecentFileContainer(props: RecentFileContainerCustomProps)
{
  const divProps: HTMLAttributes<HTMLDivElement> = props
  const recentFileContainerProps: RecentFileContainerProps = props

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

export {RecentFileContainer}