'use client'
import React,{useState,useEffect} from 'react'
import { useJournal } from '@/context/JournalContext'
export default function Inputs () {
    const { addJournalEntry } = useJournal();
    const [message,setMessage]=useState("");
    const [rating,setRating]=useState("");
    const [date,setDate]=useState("");
    const handleSubmit = () => {
        if (!date || !message || !rating) {
            alert("Please fill all fields!");
            return;
        }
        const entry = { date, message, rating};
        addJournalEntry(entry);
        console.log("Submitted Entry:", entry);

        // Reset fields for next entry
        setDate('');
        setMessage('');
        setRating('');
        alert("Message added successfuly!")
    };
    return (
        <div>
        <img src="/assets/addentry.png" className='w-full lg:h-[300px] h-[160px]'></img>
        <div className='text-black m-8 mt-13 text-black'>
            
            <p className='my-2 font-bold text-3xl mb-12'>Please Enter the following</p>
            <p>Enter today's date</p>
            <input type='date' placeholder='Enter Date' className='my-5 bg-[#a29278] lg:p-2 rounded-lg mb-9' value={date} onChange={(e)=>setDate(e.target.value)} /> <br></br>
            <textarea  className='border border-black lg:w-[1200px] w-[350px] lg:h-[130px] h-[250px] p-3 bg-[#a29278]' placeholder="Write about your day! ( I feel grateful for....)"
                value={message} onChange={(e)=>setMessage(e.target.value)}></textarea><br></br>
            <p className='mt-6 mb-4 font-bold text-2xl'>How was your day today ?</p>
            <form className='flex gap-4'>
                <label className='text-[40px] cursor-pointer'>
                    <input
                    type="radio"
                    name="rating"
                    value="🤩"
                    checked={rating === "AMAZING"}
                    onChange={(e) => setRating(e.target.value)}
                    className="hidden"
                    />
                    🤩
                </label>

                <label className='text-[40px] cursor-pointer'>
                    <input
                    type="radio"
                    name="rating"
                    value="😃"
                    checked={rating === "GREAT"}
                    onChange={(e) => setRating(e.target.value)}
                    className="hidden"
                    />
                    😃
                </label>

                <label className='text-[40px] cursor-pointer'>
                    <input
                    type="radio"
                    name="rating"
                    value="😑"
                    checked={rating === "OKAYISH"}
                    onChange={(e) => setRating(e.target.value)}
                    className="hidden"
                    />
                    😑
                </label>

                <label className='text-[40px] cursor-pointer'>
                    <input
                    type="radio"
                    name="rating"
                    value="😡"
                    checked={rating === "ANGRY"}
                    onChange={(e) => setRating(e.target.value)}
                    className="hidden"
                    />
                    😡
                </label>

                <label className='text-[40px] cursor-pointer'>
                    <input
                    type="radio"
                    name="rating"
                    value="😞"
                    checked={rating === "NOT GOOD"}
                    onChange={(e) => setRating(e.target.value)}
                    className="hidden"
                    />
                    😞
                </label>
            </form>
            <br></br>
            <button className='text-white font-bold bg-[#a29278] py-2 px-4 mt-6 mb-9 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg' onClick={handleSubmit}>Save Entry</button>
        </div>
        </div>
    );
}