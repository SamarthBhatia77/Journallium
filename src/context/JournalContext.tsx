'use client'
import React,{ createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Entry = {
  date: string;
  message: string;
  rating: string;
};

type JournalContextType = {
  journalEntries: Entry[];
  addJournalEntry: (entry: Entry) => void;
};

const JournalContext = createContext<JournalContextType | undefined>(undefined);

export function JournalProvider({ children }: { children: ReactNode }) {
    const [journalEntries, setJournalEntries] = useState<Entry[]>([]);

    // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem('journalEntries');
    if (stored) {
      setJournalEntries(JSON.parse(stored));
    }
  }, []);

    // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
  }, [journalEntries]);

    const addJournalEntry = (entry: Entry) => {
        setJournalEntries((prev) => [...prev, entry]);
    };

    return (
        <JournalContext.Provider value={{ journalEntries, addJournalEntry }}>
            {children}
        </JournalContext.Provider>
    );
}

export function useJournal() {
  const context = useContext(JournalContext);
  if (!context) {
    throw new Error("useJournal must be used within a JournalProvider");
  }
  return context;
}

