import React from 'react';

//import { useCartContext } from '../../context/CartContext'

import ItemCount from '../itemCount/itemCount';



function CartItem({imgUrl, id, title, price, qty, totalPrice, stock}) {
    //const {deleteItem, cartModification} = useCartContext();
     //Hay qe implementar context, y crear las funciones para borrar item y modificarlo
    function deleteItem() {
        
    }

    function cartModification() {
        
    }
    function deleteI () {
        deleteItem(id)
    }

    function onChange(n) {
        cartModification(id,title,imgUrl,price,n, stock)
    }
    
        
    return (
        
        <div>
            <div>
                <div>
                    <img src={imgUrl} alt=""
                    />
                </div>
            </div>
            <div>
            <h1>{title}</h1>
            <ItemCount initial={qty} stock={stock} onChange={onChange}/>
            </div>
            <p> ${totalPrice}</p>
            <button onClick = {deleteI}>x</button>

        </div>    
        
    )
}

export default CartItem