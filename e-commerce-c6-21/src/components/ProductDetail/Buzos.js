import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';
import './products.css'

const Imagen = styled.img`
  width: 12rem;
`;

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
        </BuzosCard>
          ))
        }
        </section>
      )
    }

export default Buzos