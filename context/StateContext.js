import React, {useState, createContext, useContext} from 'react';
import toast from 'react-hot-toast';


const Context = createContext();

export const StateProvider = ({children}) => {
    const [ showCart, setShowCart ] = useState(false);
    const [ totalQuantities, setTotalQuantities ] = useState(0);
    const [ cartItems, setCartItems ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ qty, setQty ] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkItemInCart = cartItems.find(item => item._id === product._id);
        setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);

        if (checkItemInCart) {
            const updatedCart = cartItems.map(item => {
               if (item._id === product._id) return {
                   ...item,
                   quantity: item.quantity + quantity
               }
               return item
            })

            setCartItems(updatedCart);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
        }

        toast.success(`${product.name} Product added to the cart!`);
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find(item => item._id === product._id);
        const newCartItem = cartItems.filter( item => item._id !== product._id);

        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItem);
    }


    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find( item => item._id === id );
        index = cartItems.findIndex( item => item._id === id );
        const newCartItem = cartItems.filter( item => item._id !== id);
      

        if (value === 'inc') {

            foundProduct.quantity = foundProduct.quantity + 1;

            newCartItem.splice(index, 0, foundProduct);
            setCartItems([...newCartItem]);

            setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price);
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
        }

        if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                foundProduct.quantity = foundProduct.quantity - 1;

                newCartItem.splice(index, 0, foundProduct);
                setCartItems([...newCartItem]);
    
                setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price);
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
            }
        }
    }

    const decQty = () => {
        setQty(prevQty => prevQty === 1 ? 1 : prevQty - 1);
    }

    const incQty = () => {
        setQty(prevQty => prevQty + 1);
    }

    return (
        <Context.Provider value={{
            showCart,
            setShowCart,
            totalQuantities,
            onAdd,
            cartItems,
            totalPrice,
            toggleCartItemQuantity,
            onRemove,
            qty, 
            decQty,
            incQty
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);