import {useEffect, useState} from "react";
import axios from "axios";
import parse from "html-react-parser";

function DevPage()
{
  const [dev, setDev] = useState<HTMLElement>()

  useEffect(() => {
    axios.get("http://localhost:5215/swagger/index.html")
      .then((res) => {
        console.log(res.data)
        setDev(res.data)
      })
  }, [])

  return (
    <div className={"p-5"}>

      <section className={"flex justify-between gap-5"}>

      </section>

    </div>
  )
}

export {DevPage}