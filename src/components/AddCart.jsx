import React, { useState } from 'react'
import { useCart } from '../contexts/CartContext'

const AddCart = ({ product }) => {

    const { addToCart } = useCart()
    const [showAlert, setShowAlert] = useState(false)

    const addCart = (e) => {
        e.preventDefault()
        addToCart(product)
        setShowAlert(true)

        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
    }

    return (
        <>
            <button type='button' className='btn btn-success' onClick={addCart}>Aggiungi al carrello</button>
            {showAlert && (<div className='alert alert-success'>Aggiunto al carrello</div>)}
        </>
    )
}

export default AddCart