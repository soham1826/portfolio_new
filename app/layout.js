"use client"
import './globals.css'
import SplashScreen from './components/splashScreen/SplashScreen'
import {usePathname} from "next/navigation"
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'Soham Kulkarni',
  description: 'My Developer Portfolio',
}

export default function RootLayout({ children }) {
  const pathName = usePathname()
  const isHome = pathName === "/"||"/#Hero";
  const[isLoading,setIsLoading] = useState(isHome)

  useEffect(()=>{
    if(isLoading)
    return
  },[isLoading])

  return (
    <html lang="en">

      <body className = "w-full h-full">
        {isLoading && isHome ?<SplashScreen finishLoading={()=>setIsLoading(false)}/>: children}
      </body>
    </html>
  )
}
