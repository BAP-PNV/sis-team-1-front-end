import {FolderCard} from "../../component"
import {HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";
import {Link} from "react-router-dom"

type FolderContainerProps =
{

}

type FolderContainerCustomProps = HTMLAttributes<HTMLDivElement> & FolderContainerProps

function SpaceFolderContainer(props: FolderContainerCustomProps)
{
  const divProps: HTMLAttributes<HTMLDivElement> = props
  const folderContainerProps: FolderContainerProps = props

  return (
    <section {...divProps} className={twMerge(divProps.className, "")}>
      <h2 className={"text-2xl mb-3"}>Folders</h2>
      <section className={"grid grid-cols-6 gap-4"}>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
        <Link to={"test"}>
          <FolderCard/>
        </Link>
      </section>
    </section>
  )
}

export {SpaceFolderContainer}