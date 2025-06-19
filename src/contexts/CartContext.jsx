import { createContext, useContext, useState, useEffect } from "react";
import { Alert } from "reactjs-alert";

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    const loadCart = () => {

        const cart = []

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            try {
                const parsedItem = JSON.parse(localStorage.getItem(key))
                cart.push(parsedItem)
            } catch {
                cart.push(JSON.parse(localStorage.getItem(key)))
            }
        }
        setCartItems(cart)
    }

    const addToCart = (product) => {
        if (!product?.id) return
        localStorage.setItem(`Cart-${product.id}`, JSON.stringify(product))
        loadCart()
    }

    const clearCart = () => {
        localStorage.clear()
        loadCart()
    }

    useEffect(() => {
        loadCart()
    }, [])


    return (
        <CartContext.Provider value={{ cartItems, addToCart, loadCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)