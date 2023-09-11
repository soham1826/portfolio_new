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
    <div className="font-bold h-screen w-full bg-[#1A1C20] overflow-x-hidden overflow-y-auto snap-y snap-mandatory main scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-Scream">
      <SocialNav/>
      <section id="Hero" className=" snap-center" >
          <Hero/>
      </section>
      <section id="About" className=" snap-start xl:overflow-y-hidden overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <About/>
      </section>
      <section id="Skills" className=" snap-start overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Skills/>
      </section>
      <section id="Experiance" className=" snap-center overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Experiance/>
      </section>
      <section id="Projects" className=" snap-start overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Projects/>
      </section>
      <section id="Contact" className=" snap-start overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Contact/>
      </section>

      <Link href="/#Hero">
          <footer className="sticky bottom-3 w-full cursor-pointer">
            <div className="flex justify-end items-center p-3">
              <img className="h-10 w-10 rounded-full grayscale hover:grayscale-0" src="assets/hero.png"/>
            </div>
          </footer>
      </Link>



    </div>
  )
}

export default page