import React from 'react'

const AddCart = ({product}) => {
    
    let cartItem = null

    const addCart = (e) => {
        e.preventDefault()
        if (product.id) {
            localStorage.setItem(`Cart-${product.id}`, JSON.stringify(product))
            console.log("Aggiunto al carrello")
            console.log(cartItem)
        }
    }
    

    if (product.id) {
        const cartItemString = localStorage.getItem(`Cart-${product.id}`)
        if (cartItemString) {
            cartItem = JSON.parse(cartItemString)
            
        }

    }

  return (
     <button type='button' onClick={addCart}>Aggiungi al carrello</button>
  )
}

export default AddCart