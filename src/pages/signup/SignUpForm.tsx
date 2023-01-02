import {Button, TextInput} from "../../components"
import {EmailRegex} from "../../utils"

interface SignUpFormProps
{
   className?: string
}

function SignUpForm(props: SignUpFormProps)
{
   return (
      <article className={`${props.className} w-[430px] rounded-lg flex flex-col border-2 p-10`}>

         <div className={"mb-7"}>
            <p className={"text-xl"}>Create new account</p>
            <h1 className={"text-3xl font-black text-green-900 uppercase"}>the Fraking PHP</h1>
         </div>

         <TextInput pattern={EmailRegex} className={"mb-5"} placeholder={"email"} name={"email"}/>
         <TextInput className={"mb-5"} placeholder={"password"} name={"password"}/>
         <TextInput className={"mb-5"} placeholder={"confirm password"} name={"confirm_password"}/>

         <Button title={"sign up"} className={"mb-5"}/>

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