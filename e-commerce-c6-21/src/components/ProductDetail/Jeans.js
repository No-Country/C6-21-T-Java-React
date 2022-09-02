import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';

const Imagen = styled.img`
  width: 12rem;
`;

const JeansCard = styled.li`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items-center';
  margin: 1rem;
  border-style: 5px solid;
  border-color: red;
`

const Jeans = () => {

        const [loading7, setloading7] = useState(true)
      
        const [jeans, listedJeans] = useState([])
      
        useEffect(()=>{
          setloading7(true)
          const db = getFirestore()
          const productCollection = collection(db, 'productos')
          
          getDocs(productCollection)
          .then (resp => listedJeans(resp.docs.map( item => ({id: item.id, ...item.data()}))))
          .catch((err)=>console.log(err))
          .finally(setloading7(false))
      },[])
      console.log(jeans)
      return (
        <section>
          {(loading7) ?
    
          <h1>Loading</h1>
          :          
          jeans.filter(jeans => jeans.category === 'jeans').map((item, index) => (
        <JeansCard>
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
        </JeansCard>
          ))
        }
        </section>
      )
    }

export default Jeans