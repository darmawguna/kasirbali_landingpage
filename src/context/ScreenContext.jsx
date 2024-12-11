/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from 'react';

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScreenSizeContext.Provider value={screenSize}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

export const useScreenSize = () => React.useContext(ScreenSizeContext);
