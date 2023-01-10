import {Button} from "../../component"
import {Link} from "react-router-dom"

function HomePage()
{
  return (
    <section className={"min-h-screen flex flex-col gap-7 items-center justify-center"}>
      <h1 className={"text-5xl font-black"}>Welcome To <span className={"text-amber-600"}>Hoai</span> <span className={"text-blue-700"}>Hieu</span> <span className={"text-emerald-600"}>Vu</span> <span className={"text-violet-600"}>Thanh</span></h1>
      <p className={"text-xl uppercase"}>the best API image storage for your application</p>
      <div className={"flex gap-5 w-auto"}>
        <Link to={"/sign-in"}>
          <Button className={"w-[200px]"} title={"Sign In"}/>
        </Link>
        <Link to={"/sign-up"}>
          <Button className={"w-[200px]"} title={"Sign Up"}/>
        </Link>
      </div>
    </section>
  )
}

export {HomePage}