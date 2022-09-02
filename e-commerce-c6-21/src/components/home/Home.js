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
  
  function setFalse(n){
    setTimeout(() => {
      if (n === 1) {
        setloading1(false)
      }else{
        setloading2(false)
      }
    }, 1500);
  }

  useEffect(()=>{
    setloading1(true)
    const db = getFirestore()
    const qryCollection = collection(db, 'brand')
    
    getDocs(qryCollection)
    .then (resp => setBrandImages(resp.docs.map( item => ({id: item.id, ...item.data()}))))
    .catch((err)=>console.log(err))
    .finally(setFalse(1))
},[])
  useEffect(()=>{
        setloading2(true)
        const db = getFirestore()
        const qryCollection = collection(db, 'brand images')
        
        getDocs(qryCollection)
        .then (resp => setImages(resp.docs.map( item => ({id: item.id, ...item.data()}))))
        .catch((err)=>console.log(err))
        .finally(setFalse(2))
    },[])
 console.log(BrandImages)
  return (
    
       (loading1||loading2) ? 
        <div>
          <h1 className='ts-1 bg-red'>loading...</h1>
        </div>

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
    
  )
}

export default Home
