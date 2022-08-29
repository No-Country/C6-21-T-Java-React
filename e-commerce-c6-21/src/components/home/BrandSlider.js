import React from 'react'
import { Carousel } from 'react-bootstrap'

function BrandSlider({BrandImages}) {
  return (
    <div>
    <Carousel controls={false} pause={false}>
      {
        BrandImages.map ((img) => <Carousel.Item> <img  key={img.id} src={img.image} className="img-fluid h-50 rounded" alt='a'/> </Carousel.Item> ) 
      }
      <Carousel.Caption className='d-flex align-content-center'>
        <h1 className='display-1'>ARIAKA</h1>
      </Carousel.Caption>
    </Carousel>
  </div>
  )
}

export default BrandSlider