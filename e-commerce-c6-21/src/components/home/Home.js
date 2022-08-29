import React from 'react';
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import CategoryCard from './CategoryCard';
import { CardGroup, Carousel} from 'react-bootstrap';
import BrandSlider from './BrandSlider';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

  const [loading1, setloading1] = useState(true)
  const [loading2, setloading2] = useState(true)
  const [Images, setImages] = useState([])
  const [BrandImages, setBrandImages] = useState([])

  useEffect(()=>{
    setloading1(true)
    const db = getFirestore()
    const qryCollection = collection(db, 'brand')
    
    getDocs(qryCollection)
    .then (resp => setBrandImages(resp.docs.map( item => ({id: item.id, ...item.data()}))))
    .catch((err)=>console.log(err))
    .finally(setloading1(false))
},[])

  useEffect(()=>{
        setloading2(true)
        const db = getFirestore()
        const qryCollection = collection(db, 'brand images')
        
        getDocs(qryCollection)
        .then (resp => setImages(resp.docs.map( item => ({id: item.id, ...item.data()}))))
        .catch((err)=>console.log(err))
        .finally(setloading2(false))
    },[])
 console.log(BrandImages)
  return (


    <section>
      { (loading1||loading2) ? 

        <h1>loading</h1>
          :
          <div>
        <BrandSlider BrandImages={BrandImages} />
        <div className='container-fluid'>
          <CardGroup className='m-5'>
          {
            Images.map ((img) => <CategoryCard className='col' key={img.id} category={img.category} img1={img.image1} img2={img.image2} img3={img.image3} img4={img.image4}/>)
          }
          </CardGroup>
        </div>
          </div>
    }
      </section>

  )
}

export default Home
