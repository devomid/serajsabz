import { createContext, useContext, useState } from 'react';

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHome, setIsHome] = useState(true);

    return (
        <GeneralContext.Provider value={{
            menuOpen, setMenuOpen,
            isHome, setIsHome
        }}>
            {children}
        </GeneralContext.Provider>
    )
};

export const GeneralState = () => {
    return useContext(GeneralContext);
};

export default GeneralProvider