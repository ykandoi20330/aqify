import { useState, useContext } from "react";
import { createContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error('AppContext must be within appContextProvider')
    }

    return context;
}

const AppContextProvider = ({ children }) => {

    const [favourite, setFavourite] = useState([]);

    const addToFavorites = () =>{
        
    }

    const removeFromFavorites = (id) =>{

    }

    return (
        <AppContext.Provider value={{ favourite, addToFavorites, removeFromFavorites }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;