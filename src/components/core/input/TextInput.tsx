interface InputProps
{
   className?: string
   name: string
   placeholder?: string
}

function TextInput(props: InputProps)
{
   return (
      <label className={`${props.className} flex flex-col`} htmlFor={props.name}>
         <input
            placeholder={props.placeholder}
            className={"border-2 p-3 rounded-[7px]"}
            name={props.name} id={props.name} type="text"/>
         <span className={"empty hidden"}></span>
      </label>
   )
}

export {TextInput}