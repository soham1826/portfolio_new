import Hero from "./components/Hero/Hero"
import SocialNav from "./components/socialNav/SocialNav"
import About from "./components/about/About"


const page = () => {
  return (
    <div className="font-bold h-screen w-full bg-[#1A1C20] overflow-x-hidden overflow-y-auto snap-y snap-mandatory main">
      <SocialNav/>
      <section id="Hero" className=" snap-start" >
          <Hero/>
      </section>
      <section id="About" className=" snap-start overflow-y-auto">
        <About/>
      </section>



    </div>
  )
}

export default page