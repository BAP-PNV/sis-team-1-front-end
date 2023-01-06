interface InputProps
{
  className?: string
  name: string
  placeholder?: string
  onChange?: any
  error?: string
  onFocus?: any
}

function TextInput(props: InputProps)
{
  return (
    <label className={`${props.className} flex flex-col`} htmlFor={props.name}>
      <input
        onFocus={props.onFocus}
        onChange={event => props.onChange && props.onChange(event.target.value)}
        placeholder={props.placeholder}
        className={"border-2 p-3 rounded-[7px]"}
        name={props.name} id={props.name} type="text"/>
      <span className="empty:hidden ml-auto mt-[3px] text-[11px] text-red-700">{props.error}</span>
    </label>
  )
}

export {TextInput}