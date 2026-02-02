import React, { createContext, useContext, useState, useEffect } from 'react';

const HandCursorContext = createContext();

export const HandCursorProvider = ({ children }) => {
    const [isGestureMode, setIsGestureMode] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);

    const toggleGestureMode = () => {
        if (!isGestureMode) {
            // Show welcome modal before activating
            setShowWelcomeModal(true);
        } else {
            // Deactivate directly
            setIsGestureMode(false);
        }
    };

    const activateGestureMode = () => {
        setIsGestureMode(true);
        setShowWelcomeModal(false);
    };

    const closeWelcomeModal = () => {
        setShowWelcomeModal(false);
    };

    return (
        <HandCursorContext.Provider value={{
            isGestureMode,
            setIsGestureMode,
            toggleGestureMode,
            activateGestureMode,
            cursorPosition,
            setCursorPosition,
            isClicking,
            setIsClicking,
            showWelcomeModal,
            closeWelcomeModal
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
