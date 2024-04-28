import React from 'react'
import QuotesCard from '../reUsabelComponent/QuotesCard'
import quoetsData from '../utils/QuotesData'

export default function Quotes() {
  return (
    <div className='quotes-container container-fluid h-100 p-0 bg-cl-1'>
        <div className='row bg-dark'>
            <h1 className='text-center my-2 mt-5'>POD's Star-Studded Ensemble</h1>
        </div>
        <div className='row bg-dark'>
            <span className='text-center my-2'>When Brands and POD Get Together, Magic Unfolds!</span>
        </div>
        <div className='container-fluid d-flex flex-wrap justify-content-evenly py-3'>
            {quoetsData.map((res,index)=><QuotesCard key={index} data={res} />)}
        </div>
    </div>
  )
}
