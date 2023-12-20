import React from 'react'

const CartWidget = () => {
  return (
    <div className='cart-wiget'>
      <span role="img" aria-label='Carrito de compras'></span>
      <span className='cart-count'>0</span>
    </div>
  )
}

export default CartWidget