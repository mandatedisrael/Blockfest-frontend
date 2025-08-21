import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className='bg-black px-[70px] py-10 flex items-center justify-between'>
        <Image src="/images/Logo.svg" alt='Logo' width={140} height={38} className='w-[140px] h-[38px] aspect-[140/38]'/>
        <nav>1</nav>
        <Button variant="default" className='p-5 text-base font-medium text-white'>Sponsor</Button>
    </div>
  )
}

export default Navbar