import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import '../App.css';


function LandingPage() {
  const [activeCarousel, setActiveCarousel] = useState(0);

  return (
    <div className="overflow-hidden">
    <div className="relative">
      <div className="invisible md:visible bg-gradient-to-r from-purple-700 to-purple-800 rounded-3xl absolute w-10 -right-12 top-10 transform -rotate-12" style={{width: '80px', height: '150px'}}></div>
      <div className="invisible md:visible bg-purple-500 rounded-3xl absolute w-10 -right-10 -top-10 transform -rotate-12" style={{width: '200px', height: '110px'}}></div>
    </div>
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 pt-8 ml-2">
              <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-black">Winder</h1>
              {/* <h1 className="text-transparent font-extrabold text-8xl bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-800">ESG Software</h1> */}
              <div className="text-gray-500 text-2xl py-5" >
                The safer dating app for the Western community
              </div>
            </div>
          </div>
    </div>
    </div>
    </div>
  )
}

export default LandingPage
