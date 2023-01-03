import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import {Button, TextInput, PasswordInput} from "../../components"
import {EmailRegex, apiEndpoint} from "../../utils"

interface SignUpFormProps
{
   className?: string
}

interface FiledType {
   value: string
   error: string
}

function SignUpForm(props: SignUpFormProps)
{
   const [usernameField, setUsernameField] = useState<FiledType>({value: "", error: ""})
   const [emailField, setEmailField] = useState<FiledType>({value: "", error: ""})
   const [passwordField, setPasswordField] = useState<FiledType>({value: "", error: ""})
   const [confirmPasswordField, setConfirmPasswordField] = useState<FiledType>({value: "", error: ""})

   const onSignUp = () => {
      let isError = false

      for (const filed of [emailField, passwordField, confirmPasswordField]) {
         if(filed.error.length > 0) {
            isError = true
            alert("please fill valid data")
            return
         };
      }
      
      const body = {
         email: emailField.value,
         password: passwordField.value,
         username: usernameField.value,
         confirm_password: confirmPasswordField.value
      }
      
      axios.post(`${apiEndpoint}/register`, body)
         .then((res) => {
            console.log(res);
         })
         .catch((res) => {
            console.log(res.response.data.errors)
            const errors = res.response.data.errors
            setEmailField({...emailField, error: errors.email[0]})
            setUsernameField({...usernameField, error: errors.username[0]})
            setPasswordField({...passwordField, error: errors.password[0]})
            setConfirmPasswordField({...confirmPasswordField, error: errors.confirm_password[0]})
         })
   }

   return (
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

         <Button title={"sign in"} className={"bg-white text-black border-2 p-2 text-sm"}/>

      </article>
   )
}

export {SignUpForm}