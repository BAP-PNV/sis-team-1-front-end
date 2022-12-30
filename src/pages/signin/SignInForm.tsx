import {TextInput, Button, LinkButton} from "../../components";

interface SignInFormProps
{
   className?: string
}

function SignInForm(props: SignInFormProps)
{
   return (
      <article className={`${props.className} w-[430px] rounded-lg flex flex-col border-2 p-10`}>

         <div className={"mb-7"}>
            <p className={"text-xl"}>Welcome to</p>
            <h1 className={"text-3xl font-black text-green-900 uppercase"}>the Fraking PHP</h1>
         </div>

         <TextInput className={"mb-5"} placeholder={"email"} name={"email"}/>
         <TextInput className={"mb-5"} placeholder={"password"} name={"password"}/>

            <Button title={"sign in"} className={"mb-5"}/>

         <LinkButton className={"mb-8 self-center"} title={"forgot password?"}/>

         <div className={"flex gap-3 mb-3"}>
            <Button title={"github"} className={"bg-black p-2 text-sm"}/>
            <Button title={"google"} className={"bg-red-500 p-2 text-sm"}/>
         </div>

         <Button title={"sign up"} className={"bg-white text-black border-2 p-2 text-sm"}/>

      </article>
   )
}

export {SignInForm}