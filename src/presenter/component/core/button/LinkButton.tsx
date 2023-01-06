interface LinkButtonProps
{
  title: string
  className?: string
}

function LinkButton(props: LinkButtonProps)
{
  return (
    <button className={`${props.className} text-[13px] text-green-800 underline m-auto`}>
      {props.title}
    </button>
  )
}

export {LinkButton}