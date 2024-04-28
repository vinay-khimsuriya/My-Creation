import React from 'react'
import SimpleCarousel from './carousel-types/SimpleCarousel'
import IndicatorsCarousel from './carousel-types/IndicatorsCarousel'
import CaptionCarousel from './carousel-types/CaptionCarousel'
import CrossfedCarousel from './carousel-types/CrossfedCarousel'
import AutoPlaingCarousel from './carousel-types/AutoPlaingCarousel'
import TouchCarousel from './carousel-types/TouchCarousel'
export default function Practice() {
  return (
    <div className='car'>
        <div className='mb-5'>
            <SimpleCarousel/>
        </div>
        <div className='mb-5'>
            <IndicatorsCarousel/>
        </div>
        <div className='mb-5'>
            <CaptionCarousel/>
        </div>
        <div className='mb-5'>
            <CrossfedCarousel/>
        </div>
        <div className='mb-5'>
            <AutoPlaingCarousel/>
        </div>
        <div className='mb-5'>
            <TouchCarousel/>
        </div>
    </div>
  )
}
