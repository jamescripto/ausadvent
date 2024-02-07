import Image from 'next/image'
import React from 'react'

// Assets
import Phone from '../../../assets/location-phone.svg'
import Email from '../../../assets/location_email.svg'

export default function Reach() {
  return (
    <section className='page sm:mx-auto mt-[2rem] md:mt-[4rem] lg:w-[27.18rem] '>
        <div className='bg-white border border-[#F59E0B] rounded-tr-[2rem] rounded-bl-[1rem] p-[1rem] md:p-[2rem]'>
            <div className=''>
                <h2 className="cormorant text-[#A16207] text-[1.5rem] md:text-[1.875rem] font-bold">To Reach Out</h2>
            </div>

            <p className='mt-[1rem] md:text-[1.125rem] '>Symply call as at</p>
            <div className="mt-[0.5rem] flex gap-[0.5rem] items-center text-[#2563EB] md:text-[1.125rem] font-semibold">
                <Image className='w-[1rem] h-[1rem]' src={Phone} title='Phone icon' alt='Phone icon' width={20} height={20} loading='lazy' />
                <a href="tel:+61439430007">+61 0439430007</a>
                <p>-</p>
                <a href="tel:+61731213060">(07) 3121 3060</a>
            </div>

            <p className='mt-[1rem] md:text-[1.125rem]'>Or email us at</p>
            <div className="flex gap-[0.5rem] items-center text-[#2563EB] font-semibold">
                <Image className='w-[1rem] h-[1rem]' src={Email} title='Phone icon' alt='Phone icon' width={20} height={20} loading='lazy' />
                <a href="mailto:admin@ausadventcare.com.au">admin@ausadventcare.com.au</a>
            </div>
        </div>
    </section>
  )
}
