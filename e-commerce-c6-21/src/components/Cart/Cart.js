import {React, useState} from 'react'
import { useCartContext } from '../../context/CartContext'


import CartItem from './CartItem'
import Form from './form'



function Cart() {
    const [loading, setLoading] = useState(false);
  //Cuando incorporemos db el estado de loading deberia ser false para que aparezca el cartelito mientras carga
    

    const { cart, emptyCart, FinalPrice } = useCartContext()
    //Hay qe implementar context, y crear las funciones para vaciar el carrito y obtener precio total

   

    const [orderSent, setOrderSent] = useState(false);
    const [user, setUser] = useState({ fullName: false , email: false ,emailValidation:false, phoneNumber: false, password: false })
    
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    
    today = dd + '/' + mm + '/' + yyyy;
    
    
    function GenerateBuyOrder() {
        let order = {}
        order.buyer = { user }
        order.date = {today}
        order.total = FinalPrice
        order.products = cart.map(item => {
        const id = item.id
        const title = item.name
        const price = item.totalprice
        return {id, title, price}
        })
        //aca hay que hacer el promisse del call a db
        .then(resp => setOrderSent(resp.id))
        .catch(err => console.log(err))
        .finally(emptyCart)
        
    }

    return (
        
        loading ? 
            <div className='card m-4 p-4'>
                <h1>Loading</h1>
            </div>
            :
            orderSent ?
                <div  className='card m-4 p-4' >
                    <h1>Gracias por tu compra {user.fullName}.<br/> El id de tu pedidos es {orderSent}.<br/> Te estaremos enviando la facturacion a {user.email} </h1>
                </div>
        :
                (cart.length > 0) ? 
                
                <div  className='card  m-4 p-4' >
                        {cart.map((prod) => <CartItem key={prod.id} id={prod.id} title={prod.name} imgUrl={prod.photo} price={prod.price} qty={prod.qty} totalPrice={prod.totalprice} stock={prod.stock}/>)}
                        <div className='d-flex flex-column justify-content-center' >
                            <span className='p-5 text-center align-self-end'> 
                            total: $ {FinalPrice}
                            <button className=' m-5 btn btn-dark w-50 align-self-end' onClick={emptyCart}> VACIAR CARRITO </button>
                            </span>
                        </div>
                    <Form user={user} GenerateBuyOrder={GenerateBuyOrder} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
        : 
            <div > 
                <h1>El carrito esta vacio</h1>
                    
                        <button className='btn btn-dark '>Ir a comprar</button>
                    
                    
            </div>
        
    )



    
    }

export default Cart