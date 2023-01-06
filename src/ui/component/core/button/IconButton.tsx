import React, {HTMLAttributes} from "react";
import {Link} from "react-router-dom"
import {twMerge} from "tailwind-merge";

// interface IconButtonProps extends React.HTMLProps<HTMLButtonElement>
// {
//   linkTo?: string
//   icon: JSX.Element
// }

type IconButtonProps = {
  icon: JSX.Element
  title: string
  theme?: string
}

type IconButtonCustomProps = HTMLAttributes<HTMLButtonElement> & IconButtonProps

function IconButton(props: IconButtonCustomProps)
{
  const buttonProps: HTMLAttributes<HTMLButtonElement> = props
  const iconButtonProps: IconButtonProps = props

  return (
    <button {...buttonProps} className={twMerge(buttonProps.className, "w-full flex items-center gap-2 p-2")}>
      {iconButtonProps.icon}
      <span className={"text-[13px]"}>{iconButtonProps.title}</span>
    </button>
  )
}

export {IconButton}