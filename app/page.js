import Hero from "./components/Hero/Hero"
import SocialNav from "./components/socialNav/SocialNav"


const page = () => {
  return (
    <div className="font-bold h-screen w-full bg-Swhite overflow-x-hidden">
        <SocialNav/>

      <section id="Hero">
          <Hero/>
      </section>



    </div>
  )
}

export default page