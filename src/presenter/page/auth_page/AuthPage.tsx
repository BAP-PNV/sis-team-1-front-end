import {Button, LinkButton, TextInput} from "../../component"
import {useState, useEffect} from "react";
import axios from "axios";
import {env} from "../../../constant";
import {Link, useNavigate} from "react-router-dom";

function AuthPage()
{
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const navigate = useNavigate()

  const onSignIn = () => {
    axios.post(`${env.apiEndpoint}/login`, {
      email: email,
      password: password
    })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        navigate("/space")
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const isAuth = localStorage.getItem("token")
  const nav = useNavigate()

  useEffect(() => {
    if (isAuth) {
      nav("/space")
    }
  }, [])

  return (
    <section className={"min-h-screen flex items-center justify-center"}>
      <article className={`w-[430px] rounded-lg flex flex-col border-2 p-10`}>

        <div className={"mb-7"}>
          <p className={"text-xl"}>Welcome to</p>
          <h1 className={"text-3xl font-black text-green-900 uppercase"}>the Fraking PHP</h1>
        </div>

        <TextInput onChange={setEmail} className={"mb-5"} placeholder={"email"} name={"email"}/>
        <TextInput onChange={setPassword} className={"mb-5"} placeholder={"password"} name={"password"}/>

        <Button onClick={onSignIn} title={"sign in"} className={"mb-5"}/>

        <LinkButton className={"mb-8 self-center"} title={"forgot password?"}/>

        <div className={"flex gap-3 mb-3"}>
          <Button title={"github"} className={"bg-black p-2 text-sm"}/>
          <Button title={"google"} className={"bg-red-500 p-2 text-sm"}/>
        </div>

        <Link to={"/sign-up"}>
          <Button title={"sign up"} className={"bg-white text-black border-2 p-2 text-sm"}/>
        </Link>

      </article>
    </section>
  )
}

export {AuthPage}