import {HTMLAttributes} from "react"
import {twMerge} from "tailwind-merge";
import {SpaceFolderContainer} from "./SpaceFolderContainer";
import {SpaceFileContainer} from "./SpaceFileContainer";
import {IoMdAddCircle} from "react-icons/io"
import {useEffect, useState, useRef} from "react"
import { env } from "../../../constant";
import axios from "axios";
import {Button} from "../../component";
import {useParams, useNavigate} from "react-router-dom"

type SpacePageProps =
{

}

type SpacePageCustomProps = HTMLAttributes<HTMLDivElement> & SpacePageProps

function SpacePage(props: SpacePageCustomProps)
{
  const nav = useNavigate()
  let {folderId} = useParams()
  const spaceRef = useRef(null)

  const [fileList, setFileList] = useState<any[]>([])
  const [folderList, setFolderList] = useState<any[]>([])

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isCreateFolderFromOpen, setIsCreateFolderFromOpen] = useState<boolean>(false)

  const [newFolderName, setNewFolderName] = useState<string>("undefined")
  const [newFile, setNewFile] = useState<File | null>()

  useEffect(() => {

    setFileList([])
    setFolderList([])

    axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem("token")}`

    axios.get(`${folderId ? `${env.apiEndpoint}/dashboard/folder/${folderId}/file-folder` : `${env.apiEndpoint}/dashboard`}`)
      .then((res) => {
        setFileList(res.data.data.files)
        setFolderList(res.data.data.folders)
      })
      .catch((error) => {
        console.error(error)
        localStorage.setItem("token", "")
        nav("/sign-in")
      })

  }, [folderId])

  useEffect(() => {
    uploadImage()
  }, [newFile])

  const createFolder = () => {
    const body = {
      folderName: newFolderName
    }
    axios.post(`${env.apiEndpoint}/dashboard/folder${folderId ? `/${folderId}` : ``}`, body)
      .then((res) => {
        setIsCreateFolderFromOpen(false)
        setFolderList((prevState: any[]) => {
          prevState.push(res.data.data)
          console.log(prevState)
          return prevState
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const uploadImage = () => {
    axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem("token")}`

    const formData = new FormData();
    formData.append("image", newFile as any)

    if (newFile) {
      axios.post(`${folderId ? `${env.apiEndpoint}/dashboard/folder/${folderId}/file` : `${env.apiEndpoint}/dashboard/file`}`, formData)
        .then((res) => {
          // setFileList(res.data.data.files)
          // setFolderList(res.data.data.folders)
          // setFileList((prevState: any[]) => {
          //   prevState.push(res.data.data)
          //   console.log(prevState)
          //   return prevState
          // })
          console.log(res.data.data)
          axios.get(`${folderId ? `${env.apiEndpoint}/dashboard/folder/${folderId}/file-folder` : `${env.apiEndpoint}/dashboard`}`)
            .then((res) => {
              setFileList(res.data.data.files)
            })
            .catch((error) => {
              console.error(error)
            })
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  useOutsideAlerter(spaceRef, () => {
    setIsMenuOpen(false)
    setIsCreateFolderFromOpen(false)
  });

  const cancelFolder = () => {
    setIsMenuOpen(false)
    setIsCreateFolderFromOpen(false)
  }

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  return (
    <div ref={spaceRef} className={twMerge(props.className, "p-5")}>

      <SpaceFolderContainer folderList={folderList} className={"mb-14"}/>
      <SpaceFileContainer fileList={fileList}/>

      <div className={"fixed bottom-14 right-14"}>
        <IoMdAddCircle onClick={openMenu} className={"cursor-pointer"} size={90} color={"green"}/>
        {
          isMenuOpen
          ? (
            <div className={"fixed bottom-14 right-14 flex flex-col gap-2"}>
              <Button onClick={() => {setIsCreateFolderFromOpen(true); setIsMenuOpen(false)}} className={"hover:bg-green-700 w-[300px]"} title={"create new folder"}/>
              <label htmlFor="" className={"relative"}>
                <input type="file" onChange={(event) => setNewFile(event.target.files ? event.target.files[0] : null)} className={"absolute top-0 left-0 bottom-0 right-0 opacity-0"}/>
                <Button className={"hover:bg-green-700 w-[300px]"} title={"upload new file"}/>
              </label>
              {/*<Button onClick={uploadImage} className={"hover:bg-green-700 w-[300px]"} title={"Upload"}/>*/}
            </div>
          )
          : null
        }
      </div>

      {
        isCreateFolderFromOpen
        ? (
          <div className={"border bg-white translate-y-[-50%] translate-x-[-50%] border-gray-600 px-8 py-6 rounded-2xl fixed top-[50%] left-[50%] flex flex-col gap-4 items-center justify-center"}>
            <label htmlFor="folder_name" className={"flex flex-col"}>
              <div className={"ml-1 mb-1 capitalize"}>folder name:</div>
              <input onChange={(event) => setNewFolderName(event.target.value)} className={"w-[300px] border border-gray-600 rounded-xl p-2"} id={"folder_name"} type="text"/>
            </label>
            <div className={"w-full flex justify-between gap-3"}>
              <button onClick={cancelFolder} className={"w-full border border-gray-600 bg-white rounded-xl py-2 px-4"}>
                cancel
              </button>
              <button onClick={createFolder} className={"w-full bg-green-900 text-white rounded-xl py-2 px-4"}>
                create
              </button>
            </div>
          </div>
        )
        : null
      }

    </div>
  )
}

function useOutsideAlerter(ref: any, callback?: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback && callback()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export {SpacePage}