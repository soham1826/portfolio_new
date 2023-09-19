import Hero from "./components/Hero/Hero"
import SocialNav from "./components/socialNav/SocialNav"
import About from "./components/about/About"
import Skills from "./components/skiils/Skills"
import Experiance from "./components/experiance/Experiance"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Link from "next/link"
import Nav from "./components/Nav"
import { getAbout, getExperience, getOtherProjects, getProjects, getSkills, getSocials } from "@/sanity/sanity-utils"

export const revalidate = 5;

// snap-y snap-mandatory 
// snap-center
// snap-start
// snap-start


export async function Page(){
  const pageInfo  = await getAbout();
  const social = await getSocials();
  const skills = await getSkills();
  const experience = await getExperience();
  const projects = await getProjects();
  const otherProjects = await getOtherProjects();
  return (
    <div className=" snap-y snap-mandatory  font-bold h-screen w-full bg-[#1A1C20] overflow-x-hidden overflow-y-auto main scrollbar-none scrollbar-track-gray-400/20 scrollbar-thumb-Scream">
      <Nav pageInfo={pageInfo}/>
      <section id="Hero" className=" snap-center " >
          <Hero pageInfo={pageInfo} social={social} />
      </section>
      <section id="About" className=" snap-start  xl:overflow-y-hidden overflow-y-auto overflow-x-hidden  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin ">
        <About pageInfo={pageInfo}/>
      </section>
      <section id="Skills" className=" snap-start overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Skills skills ={skills}/>
      </section>
      <section id="Experiance" className=" snap-start overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Experiance experience={experience}/>
      </section>
      <section id="Projects" className="snap-start">
        <Projects projects={projects} otherProjects={otherProjects}/>
      </section>
      <section id="Contact" className=" snap-start overflow-y-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <Contact pageInfo={pageInfo}/>
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
export default Page;

