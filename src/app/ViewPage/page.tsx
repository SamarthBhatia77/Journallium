'use client'
import React, { useState } from 'react'
import { useJournal } from '@/context/JournalContext'
import HomepageHeader from '../components/homepageheader';
type JournalEntry = {
  date: string;
  message: string;
  rating: string;
};
export default function ViewEntry() {
  const { journalEntries } = useJournal();
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  const displayMessage = (entry: JournalEntry) => {
    setSelectedEntry(entry);
  };

  const closeModal = () => {
    setSelectedEntry(null);
  };

  if (journalEntries.length === 0) return(
    <div>
      <div className='relative text-center lg:m-0'>
        <img src="/assets/headcard.png" className='w-full lg:h-[300px] h-[160px] lg:mt-0 mt-23'></img>
        <div className="w-full absolute  text-center lg:mt-10">
            <p className='text-white font-bold lg:text-[80px] lg:mt-18 text-[30px] -mt-18'>Let's view your entries</p>
        </div>
    </div>
     <p className='p-5 text-2xl font-bold lg:mt-9 mt-8 text-black'>No journal entries added yet !</p></div> );

  return (
    <div>
    <div className='relative text-center lg:m-0'>
        <img src="/assets/headcard.png" className='w-full lg:h-[300px] h-[160px] lg:mt-0 mt-23'></img>
        <div className="w-full absolute  text-center lg:mt-10">
            <p className='text-white font-bold lg:text-[80px] lg:-mt-55 text-[30px] -mt-18'>Let's view your entries</p>
        </div>
    </div>
    <div className='p-5'>
      <h2 className='lg:text-[40px] text-2xl font-bold mb-7 mt-7 text-black font-mono'>Your Journal Entries</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {journalEntries.map((entry, index) => (
            <div
            key={index}
            className='p-4 border rounded bg-white cursor-pointer hover:shadow-lg transform transition-transform duration-300 hover:scale-105'
            onClick={() => displayMessage(entry)}
            >
            <p><strong>Date:</strong> {entry.date}</p>
            <p><strong>Message:</strong> {entry.message.slice(0, 40)}...</p>
            <p className='text-[25px] mt-4'><strong>Day Rating:</strong> {entry.rating}</p>
            </div>
        ))}
        </div>

      {/* Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-20 backdrop-blur-lg flex justify-center items-center z-50">
          <div className="bg-white p-15 rounded-lg lg:max-w-md lg:w-full w-[400px] text-center shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-bold mb-4">Journal Entry</h2>
            <p className="mb-8"><strong>Date:</strong> {selectedEntry.date}</p>
            <p className="mb-4 whitespace-pre-wrap"><strong className='text-xl'>Message</strong><br></br> <div className='flex items-center justify-center'>{selectedEntry.message}</div></p>
            <p className="mb-6 text-xl flex items-center justify-center gap-3"><strong>Day Rating-</strong> <div className='text-[40px]'>{selectedEntry.rating}</div></p>
            <button
              className="px-6 py-2 bg-[#b8ab8a] font-bold text-white rounded hover:bg-[#b8ab8a] transition cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

