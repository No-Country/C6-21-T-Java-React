import React from 'react';


import ItemCount from '../Counter/itemCount';



function CartItem({imgUrl, id, title, price, qty, totalPrice, stock}) {

     //Hay qe implementar context, y crear las funciones para borrar item y modificarlo
    function deleteItem() {
        
    }

    function cartModification() {
        
    }

    //las funciones de arriba tienen que salir del context y no ser declaradas aca. solo las puse para que no se rompa 
    
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