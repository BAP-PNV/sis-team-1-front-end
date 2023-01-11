import { twMerge } from "tailwind-merge"

interface ButtonProps
{
  title: string
  className?: string
  onClick?: any
}

function Button(props: ButtonProps)
{
  return (
    <button onClick={props.onClick} className={twMerge("w-full bg-green-800 p-3 text-white text-xl font-bold rounded-[7px]", props.className )}>
      {props.title}
    </button>
  )
}

export {Button}