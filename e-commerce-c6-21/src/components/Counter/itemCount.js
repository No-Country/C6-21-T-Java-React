import React from 'react'
import { useState } from 'react'



function ItemCount({stock, initial, onAdd, id, onChange}) {

    const  [number, setNumber] = useState(Number(initial))
    function increase(){
        if(number<stock)
        {
            setNumber(Number(number) + 1)
            if (onChange) {
                onChange(+1)
            }
        }
        
    }
    function decrease (){
        if (number > 1) {
            setNumber(number - 1)
            if (onChange) {
                onChange(-1)
            }
        }
    }
    function addToCart (){
        onAdd(number)
    }
    

        return (


            <div >
                <section >
                    <span  onClick={decrease} > - </span>
                    <input id='inputNum'  type="text"  max={stock} min='1' readOnly value={number}/>
                    <span  onClick={increase}> + </span>
                </section>
                {
                    onAdd ?
                        <button onClick={addToCart}>agregar al carrito</button>
                        :
                        <></>
                }
            </div>
        )
}
export default ItemCount