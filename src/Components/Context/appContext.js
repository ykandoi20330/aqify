import { useState, useContext } from "react";
import { createContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('AppContext must be within appContextProvider')
    }

    return context;
}

const AppContextProvider = ( {children} ) => {

    const [favourite, setFavourite] = useState([]);

    const addToFavorites = (items) => {
        const oldFavorites = [...favourite];
        const newFavorites = oldFavorites.concat(items);
        
        setFavourite(newFavorites);
    }

    const removeFromFavorites = (cate) => {

        const oldFavorites = [...favourite];
        const newFavorites = oldFavorites.filter((items)=>items.category !== cate);

        setFavourite(newFavorites);
    }

    return (
        <>
            <AppContext.Provider value={{ favourite, addToFavorites, removeFromFavorites }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider;