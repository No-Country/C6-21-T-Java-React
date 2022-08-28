import React from 'react'
import {useState} from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function CategoryCard({category, img1, img2, img3, img4}) {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (

        <div className='card col w-25 m-2 align-items-center' >

            <Carousel className='card-img-top w-100 m-4' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="img-fluid rounded"
                    src={img1}
                    alt="First slide"
                    />
                </Carousel.Item>
                 <Carousel.Item>
                    <img
                        className="img-fluid rounded"
                        src={img2}
                        alt="Second slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid rounded "
                        src={img3}
                        alt="Third slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid rounded"
                        src={img4}
                        alt="Third slide"
                        />
                </Carousel.Item>
            </Carousel>
            <div className='card-body text-center'>
                <h5 className='card-title'>{category}</h5>
                <p>Click para ver nuestros {category}</p>
                <Link className='btn btn-dark' to='/asd'>Ir a ver</Link>
            </div>

        </div>
  )
}

export default CategoryCard