import React from 'react'
import image1 from '../images/gallery1.avif'
import image2 from '../images/gallery2.avif'
import image3 from '../images/gallery3.avif'
import image4 from '../images/gallery4.avif'
import image5 from '../images/gallery5.avif'
import image8 from '../images/gallery8.avif'
import image6 from '../images/gallery6.avif'
import image7 from '../images/gallery7.avif'

export default function Gallery() {
  
  return (
    <div className='gallery'>
        <div className='img-div div1' style={{backgroundImage:`url(${image1})`}}></div>
        <div className='img-div div2' style={{backgroundImage:`url(${image2})`}}></div>
        <div className='img-div div3' style={{backgroundImage:`url(${image3})`}}></div>
        <div className='img-div div4' style={{backgroundImage:`url(${image4})`}}></div>
        <div className='img-div div5' style={{backgroundImage:`url(${image5})`}}></div>
        <div className='img-div div6' style={{backgroundImage:`url(${image6})`}}></div>
        <div className='img-div div8' style={{backgroundImage:`url(${image8})`}}></div>
        <div className='img-div div7' style={{backgroundImage:`url(${image7})`}}></div>

    </div>
  )
}
