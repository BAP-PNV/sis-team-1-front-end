import {useEffect, useState} from "react";
import axios from "axios";

function DevPage()
{
  const [method, setMethod] = useState<any>()

  useEffect(() => {
    axios.get("http://localhost:8080")
      .then((res) => {
        setMethod(res.data)
        console.log(res.data)
      })
  }, [])

  return (
    <div className={"min-h-[100vh]"}>
      <section className={"flex justify-between gap-5 h-full"}>

        {/*<select onChange={(event) => setMethod(event.target.value)} className={"border border-gray-600 p-3 rounded-xl w-[200px]"} name="" id="">*/}
        {/*  <option value="get">GET</option>*/}
        {/*  <option value="post">POST</option>*/}
        {/*  <option value="delete">DELETE</option>*/}
        {/*</select>*/}

        {/*<button className={"border border-gray-600 p-3 rounded-xl w-[200px]"}>*/}
        {/*  Document*/}
        {/*</button>*/}

        {/*<input placeholder={"put the api here"} className={"w-full border border-gray-600 p-3 rounded-xl"} type="text"/>*/}

        {/*<button className={"border border-gray-600 p-3 rounded-xl w-[200px]"}>*/}
        {/*  Execute*/}
        {/*</button>*/}

        {/*{*/}
        {/*  method*/}
        {/*}*/}
        <iframe
          className={"w-full"}
          src="http://localhost:8080"
          name="targetframe"
          allowFullScreen={true}
        >
        </iframe>
      </section>
    </div>
  )
}

export {DevPage}