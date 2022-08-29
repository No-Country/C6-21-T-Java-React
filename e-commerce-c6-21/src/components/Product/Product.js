import React from 'react'

const product_data = [
  {id: 1, name:"remera negra", description: 'Remera de algodón negra', image:"../media/poleraNegra.png", price:300},
  {id: 2, name:"remera blanca", description: 'Remera de algodón blanca', image:"../media/poleraBlanca.jpeg", price:200},
  {id: 3, name:"remera azul", description: 'Remera de algodón azul con cuello', image:"../media/poleraAzul.png", price:350},
  {id: 4, name:"remera naranja", description: 'Remera de algodón naranja', image:"../media/poleraNaranja.jpeg", price:150},
  {id: 5, name:"remera deportiva blanca", description: 'Remera deportiva dry fit', image:"../media/poleraDeportiva.jpeg", price:400},]

const Product = () => {
  const listItems = product_data.map((item) => 
    <div className='card' key={item.id}>
      <div className='card_img'>
        <img src={item.image} alt='imagenes'/>
      </div>
      <div className='card_header'>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className='price'>{item.price}</p>
        <div className='btn'>añadir</div>
      </div>
    </div>
    );
  return (
    <div>
      <h1>Productos</h1>
        {listItems}
    </div>
  )
}

export default Product