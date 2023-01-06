import { useSearchParams } from "react-router-dom";
import axios from "axios"
import {useEffect} from "react";
import {env} from "../../../constant"

function ConfirmPage()
{
  const [query, setQuery] = useSearchParams()

  useEffect(() => {
    axios.post(`${env.apiEndpoint}/confirm`, {token: query.get("confirm-token")})
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className={""}>
      <h1>Great, Welcome to VCL</h1>
    </div>
  )
}

export {ConfirmPage}