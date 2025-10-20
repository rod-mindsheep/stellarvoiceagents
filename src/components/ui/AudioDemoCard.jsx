import React from 'react';
import Waveform from './WaveForm.jsx';

// --- 2. AudioDemoCard Component ---
const AudioDemoCard = ({ agentNumber }) => {
    return (
        // 💥 FIX: Removed min-w-[380px] to allow the card to be fully responsive 
        // within the grid column.
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl w-full">
            
            {/* 1. Play Button Icon */}
            <div className="relative p-6 rounded-full bg-indigo-200/50 hover:bg-indigo-300 transition duration-300 cursor-pointer">
                <div className="p-4 rounded-full bg-indigo-600/90 shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>

            {/* 2. Waveform Visual */}
            <Waveform />

            {/* 3. Agent Label */}
            <h3 className="text-[20px] md:text-[30px] font-extrabold text-[#25005D] uppercase tracking-wider mt-2">
                AI AGENT {agentNumber}
            </h3>
        </div>
    );
};

export default AudioDemoCard;