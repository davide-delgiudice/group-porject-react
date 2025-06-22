import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "reactjs-alert";

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])
    const [showAlert, setShowAlert] = useState(false)

    const price = cartProducts.reduce((total, product) => total + (product.offer ? product.price * (1 - product.offer) : product.price) * product.quantity, 0).toFixed(2)

    let checkoutGames = cartProducts.map((product) => {
        return [
            {
                id: product.id,
                quantity: product.quantity
            }
        ]
    })
    console.log("checkoutGames", checkoutGames)

    let savedCheckoutDatas = []

    const sendCart = () => {

        axios.post("http://127.0.0.1:3000/api/orders/preview", {
            videogames: checkoutGames
        }).then((resp) => {
            console.log("response", resp)
            savedCheckoutDatas = resp
        }).catch((err) => {
            console.log(err)
        })
    }

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
        setShowAlert(true)

        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
        loadCart()
    }

    const removeFromCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || {}

        if (!cart[product.id]) return

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

    const removeSingleProduct = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || {}

        if (!cart[product.id]) return

        delete cart[product.id]
        localStorage.setItem("cart", JSON.stringify(cart))
        loadCart()
    }

    useEffect(() => {
        loadCart()
    }, [])

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, loadCart, clearCart, removeFromCart, showAlert, removeSingleProduct, price, sendCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)