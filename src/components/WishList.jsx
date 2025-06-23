import React, { useState } from 'react'
import { useWishList } from '../contexts/WishListContext'

const WishList = () => {

    const { wishListProducts, clearWishList, removeFromWishList } = useWishList()
    const [showList, setShowList] = useState(false)

    const handleClick = () => {
        setShowList(prev => !prev)
    }

    return (
        <>
            <div>
                <button type='button' className='btn btn-primary' onClick={handleClick}><i className="fa-solid fa-star"></i></button>

                {wishListProducts.length === 0 && showList ?
                    (<div className='position-absolute wishlist p-3 rounded'>
                        <h1 className='fs-3'>WishList</h1>
                        <hr />
                        <p>La tua wishlist &egrave; vuota</p>
                    </div>) : (
                        showList &&
                        <div className='position-absolute wishlist rounded'>
                            <div className='ms-2'>
                                <h1 className='fs-3'>WishList</h1>
                                <hr />
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
                            <hr />
                            <div className='p-2 d-flex justify-content-center'>
                                <button type='button' className='btn btn-danger' onClick={clearWishList}>Cancella Wishlist</button>
                            </div>
                        </div>)

                }

            </div>
        </>
    )
}

export default WishList