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

    const addToFavorites = (card) => {
        const oldFavorites = [...favourite];

        const newFavorites = oldFavorites.concat(card);

        setFavourite(newFavorites);
    }

    const removeFromFavorites = (id) => {

        const oldFavorites = [...favourite];
        const newFavorites = oldFavorites.filter((card)=>card.id !== id);

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