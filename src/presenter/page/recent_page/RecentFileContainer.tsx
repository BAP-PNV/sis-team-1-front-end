import {FileCard} from "../../component";
import {HTMLAttributes, useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";

type RecentFileContainerProps =
{

}

type RecentFileContainerCustomProps = HTMLAttributes<HTMLDivElement> & RecentFileContainerProps

function RecentFileContainer(props: RecentFileContainerCustomProps)
{
  const divProps: HTMLAttributes<HTMLDivElement> = props
  const recentFileContainerProps: RecentFileContainerProps = props

  const [recentFileList, setRecentFileList] = useState<any[]>([])

  useEffect(() => {
    setRecentFileList(JSON.parse(localStorage.getItem("recent") as any))
  }, [])

  return (
    <section {...divProps} className={twMerge(divProps.className, "")}>
      <h2 className={"text-2xl mb-3"}>Recent Files</h2>
      <section className={"grid grid-cols-6 gap-4"}>
        {
          recentFileList ? recentFileList.map((value: any, index: number) => {
            return <FileCard url={value.url} name={value.name} key={index}/>
          }) : <div>no recent file</div>
        }
      </section>
    </section>
  )
}

export {RecentFileContainer}