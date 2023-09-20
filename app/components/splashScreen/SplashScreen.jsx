"use client"
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import anime from "animejs";
import { useEffect, useState } from "react";

const SplashScreen = ({finishLoading}) => {
    const [isMounted,setIsMounted] = useState(false)

    const animate = ()=>{
        const loader = anime.timeline({
            complete:()=>finishLoading(),
        })

        loader.add({
            targets:"#splash,#splash-text",
            delay:0,
            scale:1.25,
            duration:1000,
            easing:"easeInOutExpo"
        })
        .add({
            targets:"#splash,#splash-text",
            scale:0,
            duration:1500,
            easing:"easeInOutExpo"
        })
        
    }

    useEffect(()=>{
        const timeout = setTimeout(()=> setIsMounted(true),15)
        animate()
        return ()=> clearTimeout(timeout)
    },[])

  return (
    <div className="w-screen h-screen bg-Sblack flex flex-col justify-center items-center" id="splash-div">
        <CodeBracketSquareIcon id="splash" className="text-Scream xl:w-[200px] xl:h-[200px] w-[100px] h-[100px]"/>
        <p id="splash-text" className="font-poppins text-Swhite text-4xl">Soham.dev</p>
    </div>
  )
}

export default SplashScreen