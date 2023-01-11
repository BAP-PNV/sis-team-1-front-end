import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios"
import {useLayoutEffect, useState} from "react";
import {env} from "../../../constant"

function ConfirmPage()
{
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams()
  const [error, setError] = useState<boolean | null>(null)

  useLayoutEffect(() => {
    axios.post(`${env.apiEndpoint}/confirm`, {token: query.get("confirm-token")})
      .then((res) => {
        setError(false)
        navigate("/space")
        sessionStorage.setItem("token", res.data.data.token)
      })
      .catch((error) => {
        setError(true)
        console.error(error)
      })
  }, [])

  return (
    <div>
      {
        error === null ? (
          <div>Loading</div>
        ) : (
          !error ? null : (<div>can not confirm your account, please visit the link that we send to your email</div>)
        )
      }
    </div>
  )
}

export {ConfirmPage}