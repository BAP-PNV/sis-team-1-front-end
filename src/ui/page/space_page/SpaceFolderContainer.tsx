import {FolderCard} from "../../component"
import {HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";
import {Link} from "react-router-dom"

type FolderContainerProps =
{
  folderList: any[]
}

type FolderContainerCustomProps = HTMLAttributes<HTMLDivElement> & FolderContainerProps

function SpaceFolderContainer(props: FolderContainerCustomProps)
{
  return (
    <section className={twMerge(props.className, "")}>
      <h2 className={"text-2xl mb-3"}>Folders</h2>
      <section className={"grid grid-cols-6 gap-4"}>
        {
          props.folderList.map((folder, index) => {
            return (
              <Link key={index} to={"test"}>
                <FolderCard name={folder.name} id={folder.id}/>
              </Link>
            )
          })
        }
      </section>
    </section>
  )
}

export {SpaceFolderContainer}