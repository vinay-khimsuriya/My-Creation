import React from 'react'
import myVideo from '../videos/dummy-video.mp4'

export default function Home() {
  return (
    <div className='w-100 vh-100 bg-cl-3' >
        <div className='container border position-relative p-0'>
            <video src={myVideo} loop muted className='container'></video>
            <div className='home-continer position-absolute top-50 text-white text-center w-100   '>
              <h2 className='font-bold'>PIXELS THAT INSPIRES </h2>
              <span className='font-normal'>POD - India’s first personal </span>
              <br/>
              <span className='font-normal'>photographer booking platform.</span>
              <br/>
              <span className='font-normal'>📸 </span>
            </div>
        </div>
    </div>
  )
}

