import React from 'react'
import {useState} from 'react'
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function CategoryCard({category, img1, img2, img3, img4}) {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (

        <Card className=' m-2 align-items-center' >

                <Carousel fade className='card-img-top w-100 ' activeIndex={index} onSelect={handleSelect}>
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
            <Card.Body className='text-center'>
                <Card.Title className='card-title'>{category}</Card.Title>
                <Card.Text>Click para ver nuestros {category}</Card.Text>
                <Link className='btn btn-dark' to={`/${category}`}>Ir a ver</Link>
            </Card.Body>

        </Card>
  )
}

export default CategoryCard