import Home from "./home"
import Link from "next/link"

export default async function HomePage() {
  return (
    <main>
      <div className="flex flex-col bg-white text-black">
        <div className="flex pt-10 justify-center items-center">
          <Home />   
        </div> 
      </div>
    </main>
  )
}