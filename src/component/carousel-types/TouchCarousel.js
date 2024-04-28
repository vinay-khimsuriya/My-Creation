import React from 'react'
import CurouselFirstSlide from '../../curousel-slides/CurouselFirstSlide'
import CurouselSecondSlide from '../../curousel-slides/CurouselSecondSlide'
import CurouselThirdSlide from '../../curousel-slides/CurouselThirdSlide'
import CurouselForthSlide from '../../curousel-slides/CurouselForthSlide'

export default function TouchCarousel() {
  return (
    <div>
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="ture">
            <div class="carousel-inner">
            <div class="carousel-item active position-relative">   
                    <CurouselFirstSlide/>        
                </div>
                <div class="carousel-item">
                    <CurouselSecondSlide/>
                </div>
                <div class="carousel-item">   
                    <CurouselThirdSlide/>        
                </div>
                <div class="carousel-item">
                    <CurouselForthSlide/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
