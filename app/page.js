import Hero from "./components/Hero/Hero"
import SocialNav from "./components/socialNav/SocialNav"
import About from "./components/about/About"
import Skills from "./components/skiils/Skills"
import Experiance from "./components/experiance/Experiance"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Link from "next/link"
import Nav from "./components/Nav"

// snap-y snap-mandatory 
// snap-center
// snap-start
// snap-start


const page = () => {
  return (
    <div className=" scroll-smooth font-bold h-screen w-full bg-[#1A1C20] overflow-x-hidden overflow-y-auto main scrollbar-none scrollbar-track-gray-400/20 scrollbar-thumb-Scream">
      <Nav/>
      <section id="Hero" className=" " >
          <Hero/>
      </section>
      <section id="About" className="  xl:overflow-y-hidden overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin ">
        <About/>
      </section>
      <section id="Skills" className="  overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Skills/>
      </section>
      <section id="Experiance" className="  overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Experiance/>
      </section>
      <section id="Projects" className="">
        <Projects/>
      </section>
      <section id="Contact" className=" overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Contact/>
      </section>

          {/* <footer className="sticky xl:bottom-5 bottom-8 w-full cursor-pointer">
            <div className="flex justify-center items-center px-5">
            <Link href="/#Hero">
              <img className="h-10 w-10  opacity-50 rounded-full grayscale hover:grayscale-0" src="assets/hero.png"/>
            </Link>
            </div>
          </footer> */}



    </div>
  )
}

export default page