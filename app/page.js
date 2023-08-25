import Hero from "./components/Hero/Hero"
import SocialNav from "./components/socialNav/SocialNav"
import About from "./components/about/About"
import Skills from "./components/skiils/Skills"

const page = () => {
  return (
    <div className="font-bold h-screen w-full bg-[#1A1C20] overflow-x-hidden overflow-y-auto snap-y snap-mandatory main">
      <SocialNav/>
      <section id="Hero" className=" snap-center" >
          <Hero/>
      </section>
      <section id="About" className=" snap-center overflow-y-auto">
        <About/>
      </section>
      <section id="Skiils" className=" snap-start overflow-y-auto">
        <Skills/>
      </section>



    </div>
  )
}

export default page