import {twMerge} from "tailwind-merge"

interface AvatarProps
{
   className?: string
   imgUrl?: string
}

function Avatar(props: AvatarProps)
{
   return (
      <div className={twMerge("w-[50px] rounded-3xl overflow-hidden", props.className)}>
         <img src={props.imgUrl} alt=""/>
      </div>
   )
}

export {Avatar}