import React from 'react'
import { useState, useEffect } from 'react'

const ShoppingCart = () => {

    const [storedItems, setStoredItems] = useState([])

    useEffect(() => {

        const cart = []

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            try{
                const parsedItem = JSON.parse(localStorage.getItem(key))
                cart.push({key, parsedItem})
            } catch {
                cart.push({key, parsedItem: JSON.parse(localStorage.getItem(key))})
            }

        }
        setStoredItems(cart)
    }, [])

    return (
        
    )
}

export default ShoppingCart