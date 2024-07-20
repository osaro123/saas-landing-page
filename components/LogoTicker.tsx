"use client"

import Image from "next/image"
import acmeLogo from "../assets/images/acme.png"
import apexLogo from "../assets/images/apex.png"
import celestialLogo from "../assets/images/celestial.png"
import echoLogo from "../assets/images/echo.png"
import pulseLogo from "../assets/images/pulse.png"
import quantumLogo from "../assets/images/quantum.png"

const images = [
    {src: acmeLogo, alt: "acme logo"},
    {src: apexLogo, alt: "apex logo"},
    {src: celestialLogo, alt: "celestial logo"},
    {src: echoLogo, alt: "echo logo"},
    {src: pulseLogo, alt: "pulse logo"},
    {src: quantumLogo, alt: "quantum logo"},
]

const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="container">
            <h2 className="text-center text-xl text-white/70">Trusted by the world's most innovative teams</h2>
            <div className='overflow-hidden mt-9 before:content-[""] after:content-[""] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))] before:left-0 after:right-0 before:top-0 after:top-0'>
                <div className="flex gap-16">
                    {images.map(({src,alt},i) => (
                        <Image src={src} alt={alt} className="flex-none h-8 w-auto" key={i}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoTicker