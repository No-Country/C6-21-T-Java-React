import React from 'react';
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import CategoryCard from './CategoryCard';



const Home = () => {

  const [Images, setImages] = useState([])

  useEffect(()=>{
        const db = getFirestore()
        const qryCollection = collection(db, 'brand images')
        
        getDocs(qryCollection)
        .then (resp => setImages(resp.docs.map( item => ({id: item.id, ...item.data()}))))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div className='home'>
        <div className='container-fluid'>
          <div className='row m-5'>
          {
            Images.map ((img) => <CategoryCard className='col' key={img.id} category={img.category} img1={img.image1} img2={img.image2} img3={img.image3} img4={img.image4}/>)
          }
          </div>
        </div>
      </div>

  )
}

export default Home
