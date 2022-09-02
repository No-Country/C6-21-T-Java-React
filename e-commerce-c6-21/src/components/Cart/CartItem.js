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
        
        <div className='container'>
            <div className=' card m-3 d-flex flex-column flex-md-row justify-content-md-between h-75'>
                <div className='p-2 my-auto m-3'>
                    <img className='shadow-lg card-img img-responsive h-75 my-1' src={imgUrl} alt=""
                    />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    
                    <h1 className=' py-2 align-self-center fs-3 fw-normal' >{title}</h1>
                    <ItemCount  initial={qty} stock={stock} onChange={onChange}/>
                
                </div>
                <span className='d-flex flex-column justify-content-center align-items-center'>
                    <div className=' p-4 justify-content-center align-items-center'>
                        {/* <h4 className='text-muted'> precio total </h4> */}
                        <h4 className='fs-4 fw-normal pt-2'>${totalPrice}</h4>
                    </div>
                
                </span>
                <button className='btn btn-white p-4 m-4 h-50 align-self-center fs-5' onClick = {deleteI}>Eliminar</button>
            </div>

        </div>    
        
    )
}

export default CartItem