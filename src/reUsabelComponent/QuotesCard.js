import React from 'react'
import oneimage from '../images/quotes_logo.jpg'

export default function QuotesCard(props) {
  // const imagePath = "src/images/quotesImages/1.jpg";
  // console.log(imagePath);
  // console.log(oneimage);
  
  
  return (
    <div className='quotes-card bg-light text-dark rounded-5'>
      <div className='div-quote-image'>
        <img className='quote-image rounded-pill d-block mx-auto' src={props.data.imageId} alt='image'></img>
      </div>
      <div className=''>
        <h6 className='text-center'>{props.data.name} </h6>
        <img className='quote-logo rounded-pill mx-auto d-block' src={oneimage} alt='image'></img>
        <p className='mx-3'>{props.data.quote} </p>
      </div>
    </div>
  )
}
