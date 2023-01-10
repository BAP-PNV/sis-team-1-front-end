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
          props.folderList ? props.folderList.map((folder, index) => {
            return (
              <Link key={index} to={`/space/${folder.id}`}>
                <FolderCard name={folder.name} id={folder.id}/>
              </Link>
            )
          }) : <div>Loading...</div>
        }
      </section>
    </section>
  )
}

export {SpaceFolderContainer}