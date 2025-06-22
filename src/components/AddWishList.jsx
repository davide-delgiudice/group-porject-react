import React from 'react'
import { useWishList } from '../contexts/WishListContext'

const AddWishList = ( {product} ) => {
    const { addToWishList } = useWishList()

    const addWishList = (e) => {
        e.preventDefault()
        addToWishList(product)
    }

    return (
        <>
            <button type='button' className='btn btn-primary ms-2' onClick={addWishList}>Aggiungi alla wishlist</button>
        </>
    )
}

export default AddWishList