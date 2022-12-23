interface PasswordInputProps
{
   className?: string
   isEyeOpen?: boolean
}

function PasswordInput(props: PasswordInputProps)
{
   return (
      <label className={`${props.className}`} htmlFor="">
         <input type="password"/>
      </label>
   )
}

export {PasswordInput}