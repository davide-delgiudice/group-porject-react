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
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card bg-dark text-white shadow-lg">
                        {product.image && (
                            <img src={product.image} alt={product.name} className="card-img-top img-fluid" />
                        )}
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-text fs-5 fw-bold text-success">Prezzo: {product.price}€</p>

                            <p className="card-text">
                                <strong>Data di rilascio:</strong>{" "}
                                {product.release_date ? new Date(product.release_date).toLocaleDateString() : "N/D"}
                            </p>

                            <p className="card-text">
                                <strong>Piattaforme:</strong>{" "}
                                {product.platform?.map((p) => (
                                    <span key={p.id} className="badge bg-secondary me-1">{p.name}</span>
                                ))}
                            </p>

                            <p className="card-text">
                                <strong>Genere:</strong>{" "}
                                {product.genres?.map((g) => (
                                    <span key={g.id} className="badge bg-warning text-dark me-1">{g.name}</span>
                                ))}
                            </p>

                            <p className="card-text">
                                <strong>Publisher:</strong>{" "}
                                {product.publisher?.map((pub) => (
                                    <span key={pub.id} className="badge bg-info text-dark me-1">{pub.name}</span>
                                ))}
                            </p>

                            <div className="d-flex flex-wrap gap-2 mt-4">
                                <AddCart product={product} />
                                <AddWishList product={product} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default ProductPage