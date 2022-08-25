import React from 'react';

import { useCartContext } from '../../context/CartContext'
import ItemCount from '../Counter/itemCount';



function CartItem({imgUrl, id, title, price, qty, totalPrice, stock}) {

    const {deleteItem, cartModification} = useCartContext();
    //las funciones de arriba tienen que salir del context y no ser declaradas aca. solo las puse para que no se rompa 
    
    function deleteI () {
        deleteItem(id)
    }

    function onChange(n) {
        cartModification(id,title,imgUrl,price,n, stock)
    }
    
        
    return (
        
        <div className='container-fluid'>
            <div className=' card m-4 d-flex flex-row justify-content-between'>
                <div className='p-4'>
                    <img className='card-img' src={imgUrl} alt=""
                    />
                </div>
            <div className='d-flex flex-column a justify-content-center'>
            <h1 className='py-4' >{title}</h1>
            <span className='d-flex align-items-center'>
            </span>
            <ItemCount initial={qty} stock={stock} onChange={onChange}/>
            </div>
            <span className='d-flex flex-column justify-content-center align-items-center'>
                <div className='card p-4 justify-content-center align-items-center'>
                    <p> precio total </p>
                    <p >${totalPrice}</p>
                </div>
            
            </span>
            <button className='btn btn-dark p-4 m-4 ' onClick = {deleteI}>x</button>
            </div>

        </div>    
        
    )
}

export default CartItem