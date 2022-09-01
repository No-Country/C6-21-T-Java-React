import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';

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
          <div>
            <div>
              <Imagen src={item.image} alt='imagen'/>
            </div>
            <div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
            <div>
              <div>{item.price}</div><div><Button variant="light">Añadir al carro</Button>{' '}</div>
            </div>
          </div>
          <div>
    
          </div>
        </BuzosCard>
          ))
        }
        </section>
      )
    }

export default Buzos