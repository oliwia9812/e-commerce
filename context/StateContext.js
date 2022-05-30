import React, {useState, createContext, useContext} from 'react';


const Context = createContext();

export const StateProvider = ({children}) => {
    const [ showCart, setShowCart ] = useState(false);
    const [ totalQuantities, setTotalQuantities ] = useState(0);

    return (
        <Context.Provider value={{
            showCart,
            setShowCart,
            totalQuantities
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);