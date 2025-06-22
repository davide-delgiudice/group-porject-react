import React, { useState } from 'react'
import { useWishList } from '../contexts/WishListContext'

const WishList = () => {

    const { wishListProducts, clearWishList, removeFromWishList } = useWishList()
    const [showList, setShowList] = useState(false)

    const handleClick = () => {
        setShowList(prev => !prev)
    }

    if (wishListProducts.length === 0 && showList) {
        setShowList(false)
    }

    return (
        <>
            <div>
                <button type='button' className='btn btn-primary' onClick={handleClick}><i class="fa-solid fa-star"></i></button>

                {showList && wishListProducts.length != 0 &&
                    <div className='position-absolute wishlist'>
                        <div className='ms-2'>
                            <h1 className='fs-3'>WishList</h1>
                            <div className='overflow-hidden scrollable'>
                                <div className='overflow-y-auto h-100 overflow-x-hidden'>
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
                                                    <button type='button' className='btn btn-danger' onClick={() => removeFromWishList(product)}>Rimuovi</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='p-2 d-flex justify-content-center border-top'>
                            <button type='button' className='btn btn-danger' onClick={clearWishList}>Cancella Wishlist</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default WishList