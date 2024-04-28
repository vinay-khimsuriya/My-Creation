import React from 'react'
import Gallery from '../reUsabelComponent/Gallery'

export default function FloatImage() {
  return (
    <div className='container-fluid d-flex flex-column justify-content-between bg-cl-2 vh-100'>
        <div className='text-light text-center mt-2'>
                <h2 className='text-font-bold'>Create memories not illusion</h2>
                <span className='font-poppins'>Start creating your memories by clicking more pictures to store in you gallery</span>
        </div>
        <Gallery/>
        <button className='btn btn-primary align-center w-25 align-self-center mb-2'> Explor More</button>
    </div>
  )
}
