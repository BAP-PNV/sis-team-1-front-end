interface ButtonProps
{
   title: string
   className?: string
}

function Button(props: ButtonProps)
{
   return (
      <button className={`${props.className} w-full bg-black p-3 text-white text-xl font-bold rounded-[7px]`}>
         {props.title}
      </button>
   )
}

export {Button}