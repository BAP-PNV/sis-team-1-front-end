import {useEffect, useState} from "react";
import axios from "axios";

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
      <section className={"flex justify-between gap-5"}>
        <iframe
          className={"w-full min-h-screen"}
          src="http://localhost:8080"
          name="targetframe"
          allowFullScreen={true}>
        </iframe>
      </section>
    </div>
  )
}

export {DevPage}