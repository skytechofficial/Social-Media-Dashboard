import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#066AEF] w-full p-4 justify-between flex'>
      <div className="left">
      <Link to={"/"} className='ri-home-3-line text-2xl absolute text-white'></Link>
      </div>
      <div className="center">
      <h1 className='font-semibold font-[poppins] text-2xl text-center text-white'>Social Media Dashboard</h1>
      </div>
      <div className="right flex gap-[1vw]">
      <Link to={"https://www.youtube.com/@DeveloperAdnan1"} className="ri-youtube-line text-xl text-white"></Link>
      <Link to={"https://www.facebook.com/developeradnan1/"} className="ri-facebook-line text-xl text-white"></Link>
      <Link to={"https://x.com/AHMADMAHMOOD1_"} className="ri-twitter-x-line text-xl text-white"></Link>  

      </div>
    </div>
  )
}

export default Navbar
