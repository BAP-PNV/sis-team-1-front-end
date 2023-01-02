import {useEffect, useState} from "react";

interface InputProps
{
   className?: string
   name: string
   placeholder?: string
   pattern?: RegExp
   errorMessage?: string
   getError?: () => void
}

function TextInput(props: InputProps)
{
   const [input, setInput] = useState<string>("")
   const [error, setError] = useState<string>(props.errorMessage || "")

   useEffect(() => {
      console.log(input)
   }, [input])

   const onBlur = () => {
      if (props.pattern && !props.pattern.test(input)) {
         setError(`invalid ${props.name}`)
      }
   }

   const onFocus = () => {
      setError("")
   }

   return (
      <label className={`${props.className} flex flex-col`} htmlFor={props.name}>
         <input
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={event => setInput(event.target.value)}
            placeholder={props.placeholder}
            className={"border-2 p-3 rounded-[7px]"}
            name={props.name} id={props.name} type="text"/>
         <span className={"empty:hidden text-[12px] text-red-700 ml-auto mt-[4px] pr-1.5"}>{error}</span>
      </label>
   )
}

export {TextInput}