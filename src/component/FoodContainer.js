import React from 'react'
import data from '../utils/FoodTypeData'
import FoodCard from '../reUsabelComponent/FoodCard'

export default function FoodContainer() {
  return (
    <div style={{flexBasis:"500px"}} className='container-fluid d-flex overflow-x-hidden'>
      {data.map((res,index)=><FoodCard key={index} data={res}/>)}
    </div>
  )
}
