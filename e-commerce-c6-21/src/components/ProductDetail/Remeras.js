import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';
import './products.css'

const Imagen = styled.img`
  width: 12rem;
`;

const RemerasCard = styled.li`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items-center';
  margin: 1rem;
  border-style: 5px solid;
  border-color: red;
`

const Remeras = () => {

        const [loading6, setloading6] = useState(true)
      
        const [remeras, listedRemeras] = useState([])
      
        useEffect(()=>{
          setloading6(true)
          const db = getFirestore()
          const productCollection = collection(db, 'productos')
          
          getDocs(productCollection)
          .then (resp => listedRemeras(resp.docs.map( item => ({id: item.id, ...item.data()}))))
          .catch((err)=>console.log(err))
          .finally(setloading6(false))
      },[])
      console.log(remeras)
      return (
        <section>
          {(loading6) ?
    
          <h1>Loading</h1>
          :          
          remeras.filter(remeras => remeras.category === 'remeras').map((item, index) => (
        <RemerasCard>
          <div className='wrapper_products'>
          <div className='card_products'>
              <Imagen src={item.image} alt='imagen' className='card_image'/>
            <div className='card_body'>
              <h1 className='card_title'>{item.name}</h1>
              <p className='card_description'>{item.description}</p>
             <h3 className='card_price'>${item.price}</h3>
             <Button variant="light" className='card_btn'>Añadir al carro</Button>
            </div>
          </div>
          </div>
        </RemerasCard>
          ))
        }
        </section>
      )
    }

export default Remeras