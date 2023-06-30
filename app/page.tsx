'use client'
import { useRef } from 'react';
import HowItWorks from './howitworks';

const Logo = () => (
  <header className='text-xl text-white font-semibold'>
    <a href='https://www.playtest.fyi'>Playtest.fyi</a>
  </header>
)


export default async function Home() {
  const playtestsSignUpRef = useRef(null)
  const scrollToPlaytestsSignUp = () => playtestsSignUpRef.current?.scrollIntoView({behavior: 'smooth'})
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
    
      <nav className='fixed w-screen flex items-center p-3 bg-lime-500 shadow'>
        <Logo />
        <div className="flex md:flex-grow flex-row justify-end space-x-10">
          {/* <a href="" className="p-2 text-lime-500 border-lime-500 hover:text-lime-400 hover:border-lime-400 active:text-lime-500 active:border-lime-500 border-b-4 font-semibold">
            Log In</a> */}
        </div>
      </nav>

      <div className='flex flex-col justify-center items-center md:py-32 py-20 border-b-2'>
        <div className='flex flex-col text-center mt-5 md:text-3xl text-2xl'>
          <h1 className='font-semibold'>
            A seamless in home user testing
            <p>platform <span className='text-lime-500'>for sports brands</span></p>
          </h1>
        </div>
        
        
        <div className='p-2 mb-3 items-center flex md:flex-row flex-col md:space-between md:mt-6 mt-2 md:space-x-10 md:space-y-0 space-y-3'>
          <div className='flex flex-col items-center'>
            <label className='font-semibold'>Testing out a product?</label>
            <a href='' className='mt-2 p-3 items-center bg-lime-400 hover:bg-lime-300 active:bg-lime-400 rounded'>
              Sign up to run a playtest!
            </a> 
          </div>
          
          <div className='flex flex-col items-center justify-center'>          
            <label className='font-semibold'>
              Want to review?
            </label>
            <button 
              className='mt-2 p-3 items-center bg-lime-400 hover:bg-lime-300 active:bg-lime-400 rounded'
              onClick={scrollToPlaytestsSignUp}
            >
              👇 Apply for a playtest below 👇
            </button> 
          </div>
        </div>

        <h3 className='mt-3 text-center'>Questions?
            <p className='font-semibold'>support@playtest.fyi</p>
        </h3>
      </div>
    
      <div className='flex flex-col py-10 border-b-2 justify-center text-center'>
        <header className='text-xl font-semibold '>How it works?</header>
        <HowItWorks />
      </div>

      <div ref={playtestsSignUpRef} className='flex flex-col py-10 border-b-2 justify-center text-center'>
        <header className='text-xl font-semibold '>Sign up for a playtest</header>
        <p className='mt-5'>Coming soon...</p>
      </div>

      <div className='flex items-center p-4 bg-white border-b-2'>
        <Logo />
      </div>
    
    </main>
  )
}