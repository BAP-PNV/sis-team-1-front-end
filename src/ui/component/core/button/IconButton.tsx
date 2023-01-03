import React from "react";

interface IconButtonProps extends React.HTMLProps<HTMLButtonElement>
{

}

function IconButton(props: IconButtonProps)
{
  return (
    <button>
      {props.title}
    </button>
  )
}

export {IconButton}