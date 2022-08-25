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


            <div>
                <div className='d-flex justify-content-around' >
                    <span className='col btn btn-dark'  onClick={decrease} > - </span>
                    <input className='col form-control text-center ' id='inputNum'  type="text"  max={stock} min='1' readOnly value={number}/>
                    <span className='col btn btn-dark'   onClick={increase}> + </span>
                </div>
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