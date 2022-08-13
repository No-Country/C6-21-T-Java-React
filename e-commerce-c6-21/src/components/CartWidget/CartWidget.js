import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart"> <BsFillCartFill /> </Link>
    </div>
    
  )
}

export default CartWidget;