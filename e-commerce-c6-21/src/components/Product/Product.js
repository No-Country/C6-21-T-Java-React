import React from 'react'

const product_data = [
  {id: 1, name:"remera negra", description: 'Remera de algodón negra', image:"../media/poleraNegra.png", price:300},
  {id: 2, name:"remera blanca", description: 'Remera de algodón blanca', image:"./media/poleraBlanca.jpeg", price:200},
  {id: 3, name:"remera azul", description: 'Remera de algodón azul con cuello', image:"./media/poleraAzul.png", price:350},
  {id: 4, name:"remera naranja", description: 'Remera de algodón naranja', image:"./media/poleraNaranja.jpeg", price:150},
  {id: 5, name:"remera deportiva blanca", description: 'Remera deportiva dry fit', image:"./media/poleraDeportiva.jpeg", price:400},]

const Product = () => {
  console.log(product_data)
  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
}

export default Product