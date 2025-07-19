'use client'
import React,{ createContext, useContext, useState } from 'react';

const JournalContext = createContext();

export function JournalProvider({ children }) {
    const [journalEntries, setJournalEntries] = useState([]);
    const addJournalEntry = (entry) => {
        setJournalEntries((prev) => [...prev, entry]);
    };

    return (
        <JournalContext.Provider value={{ journalEntries, addJournalEntry }}>
            {children}
        </JournalContext.Provider>
    );
}

export function useJournal() {
    return useContext(JournalContext);
}
