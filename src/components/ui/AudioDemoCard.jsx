'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Waveform from './WaveForm.jsx';

// --- 2. AudioDemoCard Component ---
const AudioDemoCard = ({ agentNumber }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Audio file path assumption: /public/audio/agent1.mp3, /public/audio/agent2.mp3, etc.
    const audioPath = `/audio/agent${agentNumber}.mp3`;

    const togglePlayPause = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused || audio.ended) {
            audio.play().then(() => setIsPlaying(true)).catch(error => {
                console.error("Error playing audio:", error);
                // Handle autoplay restrictions if needed
            });
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    }, []);

    // Effect to reset state when audio ends naturally
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        
        const handleEnded = () => setIsPlaying(false);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    // SVG for Play/Pause button
    const ButtonIcon = isPlaying ? (
        // Pause Icon
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
    ) : (
        // Play Icon
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
        </svg>
    );

    return (
        <div className="flex flex-col items-center w-full p-6 transition duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl">
            
            {/* Hidden Audio Element */}
            <audio ref={audioRef} src={audioPath} preload="auto" />
            
            {/* 1. Play/Pause Button Icon */}
            <div 
                className="relative p-6 transition duration-300 rounded-full cursor-pointer bg-indigo-200/50 hover:bg-indigo-300"
                onClick={togglePlayPause}
            >
                <div className="p-4 rounded-full shadow-md bg-indigo-600/90">
                    {ButtonIcon}
                </div>
            </div>

            {/* 2. Waveform Visual, controlled by isPlaying state */}
            <Waveform isPlaying={isPlaying} />

            {/* 3. Agent Label */}
            <h3 className="text-[20px] md:text-[30px] font-extrabold text-[#25005D] uppercase tracking-wider mt-2">
                AI AGENT DEMO {agentNumber}
            </h3>
        </div>
    );
};


export default AudioDemoCard;
