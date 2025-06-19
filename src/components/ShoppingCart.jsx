import React from 'react'
import { useCart } from '../contexts/CartContext'

const ShoppingCart = () => {

    let totalPrice = 0

    const { cartItems, clearCart } = useCart()

    for (let j = 0; j < cartItems.length; j++) {
        totalPrice += parseFloat(cartItems[j].price)
    }

        return (
            <>
                <h1>Carrello</h1>
                <div className='mb-3'>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} className='img-fluid my-2' alt="" />
                            <div className='d-flex justify-content-between'>
                                <span>Titolo: {item.name}</span>
                                <span>Prezzo: {item.price}&euro;</span>
                            </div>
                        </div>
                    ))}
                </div>
                <h3>Spesa Totale: {totalPrice}&euro;</h3>
                <button type='button' onClick={clearCart}>Svuota Carrello</button>
            </>
        )
}

export default ShoppingCart