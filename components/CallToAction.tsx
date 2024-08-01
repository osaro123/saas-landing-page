import React from 'react'
import emojiStar from "../assets/images/emojistar.png"
import helix from "../assets/images/helix2.png"
import Image from 'next/image'

const CallToAction = () => {
  return (
    <div className=' bg-black text-white py-[72px] sm:py-24 text-center'>
        <div className='container max-w-xl relative'>
            <Image src={helix} alt='' className='helix-icon absolute top-6 left-[calc(100%+36px)] '/>
            <Image src={emojiStar} alt='' className='emoji-star-icon absolute -top-[120px] right-[calc(100%+24px)]'/>
            <h2 className='text-5xl font-bold tracking-tighter'>Get instant access</h2>
            <p className='text-xl text-white/70 mt-5 max-w-xl mx-auto'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
            <form className='flex flex-col sm:flex-row gap-2.5 mt-10 max-w-sm mx-auto'>
                <input type="email" placeholder='your@email.com' className='h-12 px-5 bg-white/20 rounded-lg placeholder:text-[#9CA3AF]'/>
                <button className='bg-white text-black h-12 sm:px-5 rounded-lg'>Get access</button>
            </form>
        </div>
    </div>
  )
}

export default CallToAction