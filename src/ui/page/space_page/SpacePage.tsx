import {HTMLAttributes} from "react"
import {twMerge} from "tailwind-merge";
import {SpaceFolderContainer} from "./SpaceFolderContainer";
import {SpaceFileContainer} from "./SpaceFileContainer";
import {IoMdAddCircle} from "react-icons/io"

type SpacePageProps =
{

}

type SpacePageCustomProps = HTMLAttributes<HTMLDivElement> & SpacePageProps

function SpacePage(props: SpacePageCustomProps)
{
  const divProps: HTMLAttributes<HTMLDivElement> = props
  const spacePageProps: SpacePageProps = props

  return (
    <div {...divProps} className={twMerge(divProps.className, "p-5")}>
      <SpaceFolderContainer className={"mb-14"}/>
      <SpaceFileContainer/>
      <IoMdAddCircle className={"fixed bottom-14 right-14"} size={90} color={"green"}/>
    </div>
  )
}

export {SpacePage}