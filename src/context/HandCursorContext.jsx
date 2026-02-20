import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { STORAGE_KEYS } from '../config/constants';

const HandCursorContext = createContext();

export const HandCursorProvider = ({ children }) => {
    const [isGestureMode, setIsGestureMode] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);
    const [foundEggs, setFoundEggs] = useState(() => {
        // Load from localStorage on init
        const saved = localStorage.getItem(STORAGE_KEYS.EASTER_EGGS);
        return saved ? JSON.parse(saved) : [];
    });
    const [showCongratsModal, setShowCongratsModal] = useState(false);

    // Reset trigger - increments when positions should be re-randomized
    const [resetTrigger, setResetTrigger] = useState(0);

    // Total number of Easter Eggs
    const TOTAL_EGGS = 8;

    // Save to localStorage whenever foundEggs changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.EASTER_EGGS, JSON.stringify(foundEggs));
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
            localStorage.removeItem(STORAGE_KEYS.EASTER_EGGS);
        }
    };

    const activateGestureMode = () => {
        // Start fresh with empty collection
        setFoundEggs([]);
        localStorage.removeItem(STORAGE_KEYS.EASTER_EGGS);
        setResetTrigger(prev => prev + 1); // Trigger new positions
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
        localStorage.removeItem(STORAGE_KEYS.EASTER_EGGS);
        setShowCongratsModal(false);
        // Trigger position re-randomization
        setResetTrigger(prev => prev + 1);
    };

    const value = useMemo(() => ({
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
        setShowCongratsModal,
        resetTrigger
    }), [
        isGestureMode,
        cursorPosition,
        isClicking,
        showWelcomeModal,
        foundEggs,
        showCongratsModal,
        resetTrigger
    ]);

    return (
        <HandCursorContext.Provider value={value}>
            {children}
        </HandCursorContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHandCursor = () => {
    const context = useContext(HandCursorContext);
    if (!context) {
        throw new Error('useHandCursor must be used within a HandCursorProvider');
    }
    return context;
};
