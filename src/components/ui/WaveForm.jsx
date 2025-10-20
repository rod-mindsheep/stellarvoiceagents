'use client';
import React from "react";

// --- 1. WaveForm Component (with required styles) ---
const Waveform = () => {
    // We'll render 12 bars like in your HTML example
    const bars = Array.from({ length: 12 });

    return (
        <>
            {/* Custom CSS for the Waveform animation */}
            <style jsx global>{`
                .waveform {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    width: 100%;
                    height: 50px;
                    margin: 1rem 0;
                }
                .wave-bar {
                    width: 6px; /* Responsive bar width */
                    height: 5px;
                    background-color: #7868F8; /* Accent Color */
                    border-radius: 3px;
                    transform-origin: bottom;
                    animation: pulse 1s infinite ease-in-out alternate;
                    /* Ensures the bars shrink nicely on smaller screens */
                    flex-shrink: 0; 
                    margin: 0 1px;
                }

                @keyframes pulse {
                    0% { height: 5px; }
                    50% { height: 45px; }
                    100% { height: 5px; }
                }
            `}</style>
            
            <div className="waveform">
                {bars.map((_, idx) => (
                    <div
                        key={idx}
                        className="wave-bar"
                        // Slight variation in delay for a more natural effect
                        style={{ animationDelay: `${idx * 0.08}s` }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default Waveform;
