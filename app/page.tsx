import Home from "./home"

const Logo = () => (
  <header className='text-xl text-white font-semibold'>
    <a href='https://www.playtest.fyi'>Playtest.fyi</a>
  </header>
)




export default async function HomePage() {

  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
    
      <nav className='fixed w-screen flex items-center p-3 bg-lime-500 shadow'>
        <Logo />
        <div className="flex md:flex-grow flex-row justify-end space-x-10">
          {/* <a href="" className="p-2 text-lime-500 border-lime-500 hover:text-lime-400 hover:border-lime-400 active:text-lime-500 active:border-lime-500 border-b-4 font-semibold">
            Log In</a> */}
        </div>
      </nav>

      

      <Home />



      <div className='flex justify-center p-4 bg-lime-500 border-b-2'>
        <header className='text-base text-white font-semibold'>
          <a href='https://www.playtest.fyi'>Playtest.fyi</a>
        </header>
      </div>
    
    </main>
  )
}