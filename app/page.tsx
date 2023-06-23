import Example from './example';
import { EXAMPLES } from '@/lib/constants';

async function getExampleData() {
  console.log(EXAMPLES)
  return EXAMPLES
}

export default async function Home() {
  const examples = await getExampleData()
  const sports = examples.map((ex) => ex.sport)
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <nav className='flex p-3 bg-white border-b bg-green-300'>
        <header>
          <a href='https://www.playtest.fyi'>Playtest.fyi</a>
        </header>
      </nav>
      <div className='md:m-12 sm:m-12 flex flex-col justify-center items-center md:mt-32 sm:mt-2'>
        <div className='grid md:grid-cols-2 md:gap-36 sm:grid-cols-1 sm:gap-3'>
          <div className='flex flex-col text-center mt-5 md:text-3xl text-2xl'>
            <h1 className='font-semibold'>
              A seamless platform for 
              <p> product testing </p>
            </h1>
            <button className='mt-3 p-2 bg-green-200 hover:bg-green-100 active:bg-green-200 rounded md:text-lg text-base'>
              Get in touch today!
            </button> 
          </div>

          <img src=''>
          </img>

        </div>
        
        
        <Example sports={sports} examples={examples}/>
        
      </div>
    </main>
  )
}