import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


const ProductDetail = () => {
  
    const { id } = useParams()

    const [product, setProduct] = useState({})
    // const [publisher, setPublisher] = useState({})
    // const [genre, setGenre] = useState({})
    // const [platform, setPlatform] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/api/videogames/${id}`).then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
    }, [])
  
    return (
        <>
            <div></div>
        </>
  )
}

export default ProductDetail