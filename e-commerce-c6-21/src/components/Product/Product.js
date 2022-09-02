import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';
import './product.css';

const Imagen = styled.img`
  width: 12rem;
`;

const ProductCard = styled.li`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items-center';
  margin: 1rem;
  border-style: 5px solid;
  border-color: red;
`

const Product = () => {

  const [loading3, setloading3] = useState(true)

  const [products, listedProducts] = useState([])

  useEffect(()=>{
    setloading3(true)
    const db = getFirestore()
    const productCollection = collection(db, 'productos')
    
    getDocs(productCollection)
    .then (resp => listedProducts(resp.docs.map( item => ({id: item.id, ...item.data()}))))
    .catch((err)=>console.log(err))
    .finally(setloading3(false))
},[])
console.log(products)
  return (
    <section>
      {(loading3) ?

      <h1>Loading</h1>
      :
      products.map((item, index) => (
    <ProductCard>
      <div>
        <div>
          <Imagen src={item.image} alt='imagen'/>
        </div>
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
        <div>
          <div>${item.price}</div><div><Button variant="light">Añadir al carro</Button>{' '}</div>
        </div>
      </div>
    </ProductCard>
      ))
    }
    </section>
  )
}

export default Product