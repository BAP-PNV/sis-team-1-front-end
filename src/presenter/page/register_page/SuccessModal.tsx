import {Button} from "../../component"
import {Link} from 'react-router-dom'

function SuccessModal()
{
  return (
    <div className={"fixed"}>
      <section className={"w-screen h-screen flex items-center justify-center backdrop-blur-sm"}>
        <article className={"flex flex-col items-center bg-white p-8 border-2"}>
          <p className={"text-xl mb-3"}>Thanks for being our customer</p>
          <p className={"text-2xl font-bold mb-10"}>We just send you a link by email, pleas verify your email via the link</p>
          <Link to={"/"}>
            <Button title={"ok"} className={"w-[200px]"}/>
          </Link>
        </article>
      </section>
    </div>
  )
}

export {SuccessModal}