import Link from "next/link"
import { motion } from "framer-motion"

const Nav = () => {
  return (
    <motion.div
    initial={{
      y:100,
      opacity:0
    }}
    animate={{
      y:0,
      opacity:1
    }}
    transition={{
      duration:1.2
    }}
    className="justify-center items-center gap-2 flex md:flex-row mt-4 flex-col">
      <div className="flex flex-row gap-2">
        <Link href = "/#About" className="nav_link"> About </Link>
        <Link href = "/#Skills" className="nav_link"> Skills </Link>
      </div>
      <Link href = "/#Experiance" className="nav_link"> Experiance </Link>
      <div className="flex flex-row gap-2">
        <Link href = "/#Projects" className="nav_link"> Projects </Link>
        <Link href = "/#Contact" className="nav_link"> Contact </Link>
      </div>
        
    
        


    </motion.div>
  )
}

export default Nav