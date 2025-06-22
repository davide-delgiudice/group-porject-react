import React, { useState } from 'react'
import { useWishList } from '../contexts/WishListContext'

const WishList = () => {

    const { wishListProducts, addToWishList, clearWishList, removeFromWishList, removeSingleProductWishList } = useWishList()
    const [showList, setShowList] = useState(false)

    const handleClick = () => {
        setShowList(prev => !prev)
    }

    return (
        <>
            <div>
                <button className='btn btn-primary' onClick={handleClick}><i class="fa-solid fa-star"></i></button>

                {showList && wishListProducts.length != 0 &&
                    <div className='position-absolute card wishlist '>
                        <div className='ms-2'>
                            <h1 className='fs-3 mt-2 '>WishList</h1>
                            {wishListProducts.map((product) => (
                                <div key={product.id} className='my-3'>
                                    <div className='card cart-img'>
                                        <img src={product.image} className='img-fluid my-1' alt="" />
                                    </div>
                                    <div className='d-flex justify-content-between row'>
                                        <span>Titolo: {product.name}</span>
                                        <span>Prezzo: {product.price}&euro;</span>
                                    </div>
                                    <div className='d-flex align-items-center '>
                                        <div className='pb-2'>
                                            <button type='button' className='btn btn-danger' onClick={() => removeSingleProductWishList(product)}>Rimuovi</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default WishList