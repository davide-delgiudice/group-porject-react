import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

const ShoppingCart = () => {

    const { cartProducts, clearCart, loadCart, removeFromCart, addToCart, removeSingleProduct, price, sendCart } = useCart()

    return (
        <>
            <div className='overflow-hidden scrollable'>
                <div className='overflow-y-auto h-100 overflow-x-hidden'>
                    <h1>Carrello</h1>
                    {cartProducts.map((product) => (
                        <div key={product.id} className='my-3'>
                            <img src={product.image} className='img-fluid my-1' alt="" />
                            <div className='d-flex justify-content-between row'>
                                <span>Titolo: {product.name}</span>
                                <span>Prezzo: {product.price}&euro;</span>
                                <span>Sconto: {(product.price*product.offer).toFixed(2)}&euro;</span>
                            </div>
                            <div className='d-flex'>
                                <p>Quantità: </p>
                                <div>
                                    <button className='mx-2 btn btn-outline-secondary px-1 py-0 text-white btn-sm' type='button' onClick={() => removeFromCart(product)}>-</button>
                                </div>
                                <p>{product.quantity}</p>
                                <div>
                                    <button className='mx-2 btn btn-outline-secondary px-1 py-0 text-white btn-sm' type='button' onClick={() => addToCart(product)}>+</button>
                                </div>
                            </div>
                            <div>
                                <button type='button' className='btn btn-danger' onClick={() => removeSingleProduct(product)}>Cancella dal carrello</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <div className='position-fixed bottom-0 z-3 total border-top'>
                <div className='py-3 '>
                    <h3>Spesa Totale: {price}&euro;</h3>
                    <Link type='button' className='btn btn-success' to='/checkoutpage' onClick={sendCart}>Checkout</Link>
                    <button type='button' className='btn btn-danger' onClick={clearCart}>Svuota Carrello</button>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart