import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (juego,quantity) => {
        if (isInCart(juego.index)) {
            let pos = cart.findIndex (x => x.index === juego.index)
            cart[pos].quantity += quantity
            setCart([...cart])
        } else {
            setCart ([...cart,{...juego, quantity:quantity}])
        }

    }

    const removeItem = (itemId) => {
        const items = cart.filter(juego => juego.index !== itemId)
        setCart ([...items])
    }

    const clear = () => {
        setCart ([])
    }
    
    const isInCart = (itemId) => {
        return cart.some(juego => juego.index === itemId) 
    }

    const cartTotal = () => {
        return cart.reduce ((accum, item) => accum += item.quantity, 0) 
    }

    const cartSum = () => {
        return cart.reduce ((accum, item) => accum += item.quantity * item.price, 0) 
    }

    return (
        <CartContext.Provider value={{cart,addItem, removeItem, clear, cartTotal, cartSum}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider