import React from 'react'

export default function FoodCard(props) {
  return (
    <div className='container border' style={{flexBasis:"900px",flexShrink:"0"}}>
        
            <img className='' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+props.data.imageId} style={{width:"100px",display:"block"}}></img>
        
        <h5 className='border'>{props.data.name} </h5>
    </div>
  )
}
