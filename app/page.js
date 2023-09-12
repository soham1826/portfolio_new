import Hero from "./components/Hero/Hero"
import SocialNav from "./components/socialNav/SocialNav"
import About from "./components/about/About"
import Skills from "./components/skiils/Skills"
import Experiance from "./components/experiance/Experiance"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Link from "next/link"

const page = () => {
  return (
    <div className="font-bold h-screen w-full bg-[#1A1C20] overflow-x-hidden overflow-y-auto snap-y snap-mandatory main scrollbar-none scrollbar-track-gray-400/20 scrollbar-thumb-Scream">
      <SocialNav/>
      <section id="Hero" className=" snap-center" >
          <Hero/>
      </section>
      <section id="About" className=" snap-start xl:overflow-y-hidden overflow-y-hidden  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin ">
        <About/>
      </section>
      <section id="Skills" className=" snap-start overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Skills/>
      </section>
      <section id="Experiance" className=" snap-center overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Experiance/>
      </section>
      <section id="Projects" className=" snap-center overflow-x-auto ">
        <Projects/>
      </section>
      <section id="Contact" className=" snap-start overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Contact/>
      </section>

          <footer className="sticky xl:bottom-5 bottom-8 w-full cursor-pointer">
            <div className="flex justify-center items-center px-5">
            <Link href="/#Hero">
              <img className="h-10 w-10  opacity-50 rounded-full grayscale hover:grayscale-0" src="assets/hero.png"/>
            </Link>
            </div>
          </footer>



    </div>
  )
}

export default page