import React, { createContext, useContext, useState, useEffect } from 'react';

const HandCursorContext = createContext();

export const HandCursorProvider = ({ children }) => {
    const [isGestureMode, setIsGestureMode] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);
    const [foundEggs, setFoundEggs] = useState(() => {
        // Load from localStorage on init
        const saved = localStorage.getItem('foundEasterEggs');
        return saved ? JSON.parse(saved) : [];
    });
    const [showCongratsModal, setShowCongratsModal] = useState(false);

    // Total number of Easter Eggs
    const TOTAL_EGGS = 8;

    // Save to localStorage whenever foundEggs changes
    useEffect(() => {
        localStorage.setItem('foundEasterEggs', JSON.stringify(foundEggs));
    }, [foundEggs]);

    const toggleGestureMode = () => {
        if (!isGestureMode) {
            // Show welcome modal before activating
            setShowWelcomeModal(true);
        } else {
            // Deactivate and reset collection
            setIsGestureMode(false);
            // Reset collection when deactivating
            setFoundEggs([]);
            localStorage.removeItem('foundEasterEggs');
        }
    };

    const activateGestureMode = () => {
        setIsGestureMode(true);
        setShowWelcomeModal(false);
    };

    const closeWelcomeModal = () => {
        setShowWelcomeModal(false);
    };

    const collectEgg = (eggId) => {
        if (!foundEggs.includes(eggId)) {
            const newFoundEggs = [...foundEggs, eggId];
            setFoundEggs(newFoundEggs);

            // Check if all eggs are found
            if (newFoundEggs.length === TOTAL_EGGS) {
                // Small delay for effect
                setTimeout(() => {
                    setShowCongratsModal(true);
                }, 500);
            }
        }
    };

    const resetCollection = () => {
        setFoundEggs([]);
        localStorage.removeItem('foundEasterEggs');
        setShowCongratsModal(false);
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
            closeWelcomeModal,
            foundEggs,
            collectEgg,
            resetCollection,
            totalEggs: TOTAL_EGGS,
            showCongratsModal,
            setShowCongratsModal
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
