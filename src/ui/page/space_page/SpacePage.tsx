import {HTMLAttributes} from "react"
import {twMerge} from "tailwind-merge";
import {SpaceFolderContainer} from "./SpaceFolderContainer";
import {SpaceFileContainer} from "./SpaceFileContainer";
import {IoMdAddCircle} from "react-icons/io"
import {useEffect, useState} from "react"
import { env } from "../../../constant";
import axios from "axios";

type SpacePageProps =
{

}

type SpacePageCustomProps = HTMLAttributes<HTMLDivElement> & SpacePageProps

function SpacePage(props: SpacePageCustomProps)
{
  const divProps: HTMLAttributes<HTMLDivElement> = props
  const spacePageProps: SpacePageProps = props

  const [fileList, setFileList] = useState<any[]>([])
  const [folderList, setFolderList] = useState<any[]>([])

  useEffect(() => {

    axios.defaults.headers.common['Authorization'] = `bearer ${sessionStorage.getItem("token")}`

    axios.get(`${env.apiEndpoint}/dashboard`)
      .then((res) => {
        setFileList(res.data.data.files)
        setFolderList(res.data.data.folders)
      })
      .catch((error) => {
        console.log("error");
        
        console.error(error)
      })

  }, [])

  return (
    <div {...divProps} className={twMerge(divProps.className, "p-5")}>
      <SpaceFolderContainer folderList={folderList} className={"mb-14"}/>
      <SpaceFileContainer fileList={fileList}/>
      <IoMdAddCircle className={"fixed bottom-14 right-14"} size={90} color={"green"}/>
    </div>
  )
}

export {SpacePage}