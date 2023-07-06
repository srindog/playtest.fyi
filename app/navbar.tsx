"use client"
import Link from "next/link"
import { useState } from "react"

const Logo = () => (
  <Link href='/' className="inline-flex items-center p-2 mr-4 ">
    <span className='text-xl text-white font-bold uppercase tracking-wide'>
      Playtest.fyi
    </span>
  </Link> 
)


export const Navbar = () => {
  const [active, setActive] = useState(false)
  const handleMenuClick = () => {
    setActive(!active);
  }
  return (
    <nav className='flex items-center flex-wrap bg-lime-500 p-2 px-5'>
      <Logo />
      <button 
        className='inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleMenuClick}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      <div className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto lg:space-x-10'>
          <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
              Home
          </Link>
          {/* <Link href='/about' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
              About
          </Link> */}
          {/* <Link href='/pricing' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
              Pricing
          </Link> */}
          <Link href='/contact' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
            Contact
          </Link>
          {/* <Link href='/login' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
            Log In
          </Link> */}
        </div>
      </div>
    </nav>
  )
}


