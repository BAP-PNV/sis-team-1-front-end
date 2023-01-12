import {useEffect, useState} from "react";
import axios from "axios";
import {env} from "../../../constant";

function DevPage()
{
  const [, setMethod] = useState<any>()

  useEffect(() => {
    axios.get("http://localhost:8080")
      .then((res) => {
        setMethod(res.data)
      })
  }, [])

  return (
    <div className={"p-5"}>
      <section className={"grid grid-cols-[1.5fr_1fr] justify-between gap-5"}>
        <iframe
          className={"w-full min-h-screen"}
          src="http://localhost:8080"
          name="targetframe"
          allowFullScreen={true}>
        </iframe>
        <div className={"border-gray-300 border-l p-5"}>

          <h2 className={"text-2xl mb-4"}>Document</h2>

          <div className={"mb-10"}>
            <p>API URL</p>
            <p className={"underline text-blue-700"}>{env.apiEndpoint}/<span className={"text-black"}>[your_uri]</span>?access_key=<span className={"text-black"}>[your_secret_key]</span></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export {DevPage}