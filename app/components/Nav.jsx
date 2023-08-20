import Link from "next/link"

const Nav = () => {
  return (
    <div className="justify-center items-center gap-2 flex md:flex-row mt-4 flex-col">
      <div className="flex flex-row gap-2">
        <Link href = "/#About" className="nav_link"> About </Link>
        <Link href = "/#Skills" className="nav_link"> Skills </Link>
      </div>
      <div className="flex flex-row gap-2">
        <Link href = "/#Projects" className="nav_link"> Projects </Link>
        <Link href = "/#Contact" className="nav_link"> Contact </Link>
      </div>
        
    
        


    </div>
  )
}

export default Nav