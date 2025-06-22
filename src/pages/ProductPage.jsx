import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import AddCart from '../components/AddCart'
import AddWishList from '../components/AddWishList'


const ProductPage = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/api/videogames/${id}`).then((res) => {
            setProduct(res.data)
        })
            .catch(err => {
                console.log("Errore fetch:", err)
            })
    }, [])

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <img src={product.image} alt="" />
                </div>
                <div className='col-12'>
                    <h1>Titolo: {product.name}</h1>
                    <p>Prezzo: {product.price}&euro;</p>
                    <p>Data di rilascio: {new Date(product.release_date).toLocaleDateString()}</p>
                    <p>
                        Piattaforme: {product.platform?.map((platform) => (
                            <span key={platform.id}>{platform.name} </span>
                        ))}
                    </p>
                    <p>
                        Genere: {product.genres?.map((genre) => (
                            <span key={genre.id}>{genre.name} </span>
                        ))}
                    </p>
                    <p>
                        Publisher: {product.publisher?.map((pub) => (
                            <span key={pub.id}>{pub.name}</span>
                        ))}
                    </p>
                    <AddCart product={product} />
                    <AddWishList product={product} />
                </div>
            </div>
        </>
    )

}


export default ProductPage