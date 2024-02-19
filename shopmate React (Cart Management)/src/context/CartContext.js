import { useReducer } from "react";
import { createContext, useContext } from "react"
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext (initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (product) => {
        const updateCart = state.cartList.concat(product);
        updateTotal(updateCart);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateCart
            }
        })
    }

    const removeFromCart = (product) => {
        const updateCart = state.cartList.filter(current => current.id !== product.id)
        updateTotal(updateCart);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updateCart
            }
        })
    }

    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total = total + product.price);

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total: total
            }
        })
    }


    const value={ total: state.total, 
                  cartList: state.cartList,
                  addToCart,
                  removeFromCart};
    return (
    
        <CartContext.Provider value={value}>
           {children} 
        </CartContext.Provider>   

    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}