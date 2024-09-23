import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemCount, setItemcount] = useState(0);


    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.count
            }, 0)
            setItemcount(amount)
        }
    }, [cart])



    const handleAddToCart = (product) => {
        const productExists = cart.find((el) => el._id === product._id);
        if (productExists) {
            setCart(
                cart.map((el) =>
                    el._id === product._id ? { ...el, count: el.count + 1 } : el
                )
            );
        } else {
            setCart([...cart, { ...product, count: 1 }]);
        }
    };

    const clearCart=()=>{
        setCart([]);
    }


    return (
        <CartContext.Provider value={{ cart, itemCount, handleAddToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
