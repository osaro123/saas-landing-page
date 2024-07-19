import logo from "../assets/images/logosaas.png"
import MenuIcon from "../assets/icons/menu.svg"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="bg-black">
        <div className='px-4'>
            <div className="py-4 flex items-center justify-between">
                <div className="relative">
                    <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] blur-md"></div>
                    <Image src={logo} alt="Saas logo" className="w-12 h-12 relative"/>
                </div>
                <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
                    <MenuIcon className="text-white" />
                </div>
                <nav className="sm:flex items-center gap-6 hidden">
                    <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">About</a>
                    <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">Features</a>
                    <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">Updates</a>
                    <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">Help</a>
                    <a href="" className="text-white text-opacity-60 hover:text-opacity-100 transition">Customers</a>
                    <button className="bg-white py-2 px-4 rounded-lg text-black">Get for free</button>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar