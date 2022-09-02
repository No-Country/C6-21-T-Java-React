import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import styled from '@emotion/styled';
import Button from 'react-bootstrap/Button';

const Imagen = styled.img`
  width: 12rem;
`;

const CamisasCard = styled.li`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items-center';
  margin: 1rem;
  border-style: 5px solid;
  border-color: red;
`

const Camisas = () => {

        const [loading5, setloading5] = useState(true)
      
        const [camisas, listedCamisas] = useState([])
      
        useEffect(()=>{
          setloading5(true)
          const db = getFirestore()
          const productCollection = collection(db, 'productos')
          
          getDocs(productCollection)
          .then (resp => listedCamisas(resp.docs.map( item => ({id: item.id, ...item.data()}))))
          .catch((err)=>console.log(err))
          .finally(setloading5(false))
      },[])
      console.log(camisas)
      return (
        <section>
          {(loading5) ?
    
          <h1>Loading</h1>
          :          
          camisas.filter(camisas => camisas.category === 'camisas').map((item, index) => (
        <CamisasCard>
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
        </CamisasCard>
          ))
        }
        </section>
      )
    }

export default Camisas