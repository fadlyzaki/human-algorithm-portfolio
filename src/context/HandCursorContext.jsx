import React, { createContext, useContext, useState } from 'react';

const HandCursorContext = createContext();

export const HandCursorProvider = ({ children }) => {
    const [isGestureMode, setIsGestureMode] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);

    const toggleGestureMode = () => setIsGestureMode(prev => !prev);

    return (
        <HandCursorContext.Provider value={{
            isGestureMode,
            setIsGestureMode,
            toggleGestureMode,
            cursorPosition,
            setCursorPosition,
            isClicking,
            setIsClicking
        }}>
            {children}
        </HandCursorContext.Provider>
    );
};

export const useHandCursor = () => {
    const context = useContext(HandCursorContext);
    if (!context) {
        throw new Error('useHandCursor must be used within a HandCursorProvider');
    }
    return context;
};
