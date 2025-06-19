import React from 'react'
import { useCart } from '../contexts/CartContext'

const ShoppingCart = () => {

    let totalPrice = 0
    let finalPrice = 0

    const { cartItems, clearCart, loadCart } = useCart()

    const removeProduct = (product) => {
        localStorage.removeItem(`Cart-${product.id}`)
        loadCart()
    }

    for (let j = 0; j < cartItems.length; j++) {
        totalPrice += parseFloat(cartItems[j].price)
        finalPrice = totalPrice.toFixed(2)
    }

    return (
        <>
            <h1>Carrello</h1>
            <div className='mb-3'>
                {cartItems.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} className='img-fluid my-2' alt="" />
                        <div className='d-flex justify-content-between'>
                            <span>Titolo: {product.name}</span>
                            <span>Prezzo: {product.price}&euro;</span>
                            <button type='button' onClick={() => removeProduct(product)}>Rimuovi Prodotto</button>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Spesa Totale: {finalPrice}&euro;</h3>
            <button type='button' onClick={clearCart}>Svuota Carrello</button>
        </>
    )
}

export default ShoppingCart