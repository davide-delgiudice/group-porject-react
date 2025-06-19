import React from 'react'
import { useCart } from '../contexts/CartContext'

const ShoppingCart = () => {

    let totalPrice = 0
    let finalPrice = 0

    const { cartProducts, clearCart, loadCart, removeFromCart, addToCart } = useCart()

    for (let j = 0; j < cartProducts.length; j++) {
        totalPrice += parseFloat(cartProducts[j].price * cartProducts[j].quantity)
        finalPrice = totalPrice.toFixed(2)
    }

    return (
        <>
            <h1>Carrello</h1>
            <div className='mb-3'>
                {cartProducts.map((product) => (
                    <div key={product.id} className='my-3'>
                        <img src={product.image} className='img-fluid my-1' alt="" />
                        <div className='d-flex justify-content-between row'>
                            <span>Titolo: {product.name}</span>
                            <span>Prezzo: {product.price}&euro;</span>
                        </div>
                        <div className='d-flex'>
                            <p>Quantità: </p>
                            <div>
                                <button className='mx-2 btn btn-outline-secondary px-1 py-0 text-white btn-sm' type='button'  onClick={() => removeFromCart(product)}>-</button>
                            </div>
                            <p>{product.quantity}</p>
                            <div>
                                <button className='mx-2 btn btn-outline-secondary px-1 py-0 text-white btn-sm' type='button'onClick={() => addToCart(product)}>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Spesa Totale: {finalPrice}&euro;</h3>
            <button type='button' className='btn btn-danger' onClick={clearCart}>Svuota Carrello</button>
        </>
    )
}

export default ShoppingCart