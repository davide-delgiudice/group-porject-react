import { createContext, useContext, useState, useEffect } from "react";
import { Alert } from "reactjs-alert";

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])

    const loadCart = () => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || {}
        const products = Object.values(storedCart)
        setCartProducts(products)
    }

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || {}

        if (cart[product.id]) {
            cart[product.id].quantity += 1
        } else {
            cart[product.id] = { ...product, quantity: 1 }
        }

        localStorage.setItem("cart", JSON.stringify(cart))
        loadCart()
    }

    const removeFromCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || {}

        if(!cart[product.id]) return

        if (cart[product.id].quantity > 1) {
            cart[product.id].quantity -= 1
        } else {
            delete cart[product.id]
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        loadCart()
    }

    const clearCart = () => {
        localStorage.removeItem("cart")
        setCartProducts([]);
        loadCart()
    }

    useEffect(() => {
        loadCart()
    }, [])


    return (
        <CartContext.Provider value={{ cartProducts, addToCart, loadCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)