import axios from "axios"
import { useState } from "react"
import {Button, TextInput, PasswordInput} from "../../component"
import {env} from "../../../constant"
import {SuccessModal} from "./SuccessModal";
import {Link} from "react-router-dom";

interface SignUpFormProps
{
  className?: string
}

interface FiledType
{
  value: string
  error: string
}

// I'm tried, Just handle register carelessly
function RegisterPage(props: SignUpFormProps)
{
  const [usernameField, setUsernameField] = useState<FiledType>({value: "", error: ""})
  const [emailField, setEmailField] = useState<FiledType>({value: "", error: ""})
  const [passwordField, setPasswordField] = useState<FiledType>({value: "", error: ""})
  const [confirmPasswordField, setConfirmPasswordField] = useState<FiledType>({value: "", error: ""})

  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false)

  const onSignUp = () => {
    // let isError = false

    for (const filed of [emailField, passwordField, confirmPasswordField]) {
      if(filed.error.length > 0) {
        // isError = true
        alert("please fill valid data")
        return
      }
    }

    const body = {
      email: emailField.value,
      password: passwordField.value,
      username: usernameField.value,
      confirm_password: confirmPasswordField.value
    }

    axios.post(`${env.apiEndpoint}/register`, body)
      .then((res) => {
        setIsNotificationOpen(true)
      })
      .catch((res) => {
        const errors = res.response.data.errors
        console.log(res)
        errors.email && setEmailField({...emailField, error: errors.email[0]})
        errors.username && setUsernameField({...usernameField, error: errors.username[0]})
        errors.password && setPasswordField({...passwordField, error: errors.password[0]})
        errors.confirm_password && setConfirmPasswordField({...confirmPasswordField, error: errors.confirm_password[0]})
      })
  }

  return (
    <section className={"min-h-screen relative flex items-center justify-center"}>

      {
        isNotificationOpen
          ? (
            <SuccessModal/>
          )
          : null
      }

      <article className={`${props.className} w-[430px] rounded-lg flex flex-col border-2 p-10`}>

        <div className={"mb-7"}>
          <p className={"text-xl"}>Create new account</p>
          <h1 className={"text-3xl font-black text-green-900 uppercase"}>the Fraking PHP</h1>
        </div>

        <TextInput
          onFocus={() => {setEmailField({ ...emailField, error: "" })}}
          error={emailField.error}
          onChange={(value: string) => {setEmailField({ ...emailField, value })}}
          className={"mb-5"} placeholder={"email"} name={"email"}/>
        <TextInput
          onFocus={() => {setUsernameField({ ...usernameField, error: "" })}}
          error={usernameField.error}
          onChange={(value: string) => {setUsernameField({ ...usernameField, value })}}
          className={"mb-5"} placeholder={"username"} name={"username"}/>
        <PasswordInput
          onFocus={() => {setPasswordField({ ...passwordField, error: "" })}}
          error={passwordField.error}
          onChange={(value: string) => {setPasswordField({ ...passwordField, value })}}
          className={"mb-5"} placeholder={"password"} name={"password"}/>
        <PasswordInput
          onFocus={() => {setConfirmPasswordField({ ...confirmPasswordField, error: "" })}}
          error={confirmPasswordField.error}
          onChange={(value: string) => {setConfirmPasswordField({ ...confirmPasswordField, value })}}
          className={"mb-5"} placeholder={"confirm password"} name={"confirm_password"}/>

        <Button onClick={onSignUp} title={"sign up"} className={"mb-5"}/>

        <span className={"self-center mb-3 text-sm"}>or continue with</span>

        <div className={"flex gap-3 mb-3"}>
          <Button title={"github"} className={"bg-black p-2 text-sm"}/>
          <Button title={"google"} className={"bg-red-500 p-2 text-sm"}/>
        </div>

        <Link to={"/sign-in"}>
          <Button title={"sign in"} className={"bg-white text-black border-2 p-2 text-sm"}/>
        </Link>

      </article>
    </section>
  )
}

export {RegisterPage}