import React from 'react'
import { useCart } from '../contexts/CartContext'

const ShoppingCart = () => {

    let totalPrice = 0
    let finalPrice = 0

    const { cartProducts, clearCart, removeFromCart, addToCart, removeSingleProduct } = useCart()

    for (let j = 0; j < cartProducts.length; j++) {
        totalPrice += parseFloat(cartProducts[j].price * cartProducts[j].quantity)
        finalPrice = totalPrice.toFixed(2)
    }

    return (
        <>
            <div className='overflow-hidden scrollable'>
                <div className='overflow-y-auto h-100 overflow-x-hidden'>
                    <h1>Carrello</h1>
                    {cartProducts.map((product) => (
                        <div key={product.id} className='my-3'>
                            <div className='card cart-img'>
                                <img src={product.image} className='img-fluid my-1' alt="" />
                            </div>
                            <div className='d-flex justify-content-between row'>
                                <span>Titolo: {product.name}</span>
                                <span>Prezzo: {product.price}&euro;</span>
                            </div>
                            <div className='d-flex align-items-center '>
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
                                <div className='pb-2'>
                                    <button type='button' className='btn btn-danger' onClick={() => removeSingleProduct(product)}>Rimuovi</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <div className='position-fixed bottom-0 z-3 total border-top'>
                <div className='py-3 '>
                    <h3>Spesa Totale: {finalPrice}&euro;</h3>
                    <button type='button' className='btn btn-danger' onClick={clearCart}>Svuota Carrello</button>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart