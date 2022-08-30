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
                <div className='p-2'>
                    <img className='card-img h-75 m-2' src={imgUrl} alt=""
                    />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    
                    <h1 className=' py-2 align-self-start' >{title}</h1>
                    <ItemCount initial={qty} stock={stock} onChange={onChange}/>
                
                </div>
                <span className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='card p-4 justify-content-center align-items-center'>
                        <h4 className='text-muted'> precio total </h4>
                        <h4>${totalPrice}</h4>
                    </div>
                
                </span>
                <button className='btn btn-dark p-4 m-4 h-50 align-self-center' onClick = {deleteI}>x</button>
            </div>

        </div>    
        
    )
}

export default CartItem