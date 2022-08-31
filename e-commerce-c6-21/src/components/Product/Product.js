import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const Product = () => {

  const [loading2, setloading2] = useState(true)

  const [products, listedProducts] = useState([])

  useEffect(()=>{
    setloading2(true)
    const db = getFirestore()
    const productCollection = collection(db, 'productos')
    
    getDocs(productCollection)
    .then (resp => listedProducts(resp.docs.map( item => ({id: item.id, ...item.data()}))))
    .catch((err)=>console.log(err))
    .finally(setloading2(false))
},[])
console.log(products)
  return (
    <div>Product</div>
  )
}

export default Product