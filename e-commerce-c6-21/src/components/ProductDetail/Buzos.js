import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';
import { useCartContext } from '../../context/CartContext'
import './products.css'
const {cartModification} = useCartContext();


const BuzosCard = styled.li`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items-center';
  margin: 1rem;
  border-style: 5px solid;
  border-color: red;
`

const Buzos = () => {

        const [loading4, setloading4] = useState(true)
      
        const [buzos, listedBuzos] = useState([])
      
        useEffect(()=>{
          setloading4(true)
          const db = getFirestore()
          const productCollection = collection(db, 'productos')
          
          getDocs(productCollection)
          .then (resp => listedBuzos(resp.docs.map( item => ({id: item.id, ...item.data()}))))
          .catch((err)=>console.log(err))
          .finally(setloading4(false))
      },[])
      console.log(buzos)
      return (
        <section>
          {(loading4) ?
    
          <h1>Loading</h1>
          :       
          
          buzos.filter(buzos => buzos.category === 'buzos').map((item, index) => (
        <BuzosCard>
          <div class="card mb-3" style={{maxWidth:'540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
    <img src={item.image} class="img-fluid rounded-start" alt="imagen_producto"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">{item.description}</p>
        <p class="card-text"><small class="text-muted">${item.price}</small></p>
      </div>
      <div>
      <Button variant="light" className='card_btn' onClick={function onChange(n) {
        cartModification(item.id,item.name,item.image,item.price,1, 100)
    }}>Añadir al carro</Button>
      </div>
    </div>
  </div>
</div>
        </BuzosCard>
          ))
        }
        </section>
      )
    }

export default Buzos