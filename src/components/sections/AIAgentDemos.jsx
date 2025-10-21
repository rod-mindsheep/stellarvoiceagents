import React from 'react';
import AudioDemoCard from '@/components/ui/AudioDemoCard.jsx'; // Import the reusable component

// --- 3. AIAgentDemos Component (Main Export) ---
const AIAgentDemos = () => {
    return (
        // 💥 FIX: Removed fixed w-[80vw] sizing. Use w-full for fluid width.
        <div className="flex flex-col items-center w-full py-6 z-5">
            
            {/* Content wrapper to center the cards and apply padding */}
            <div className="w-full px-4 mx-auto max-w-7xl">

                {/* Global CSS for the Waveform animation and structure, now defined once */}
                <style dangerouslySetInnerHTML={{ __html: `
                    .waveform {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                        width: 100%;
                        height: 50px;
                        margin: 1rem 0;
                    }
                    .wave-bar {
                        width: 6px;
                        height: 5px;
                        background-color: #7868F8;
                        border-radius: 3px;
                        transform-origin: bottom;
                        animation: pulse 1s infinite ease-in-out alternate;
                        flex-shrink: 0; 
                        margin: 0 1px;
                    }

                    @keyframes pulse {
                        0% { height: 5px; }
                        50% { height: 45px; }
                        100% { height: 5px; }
                    }
                `}} />
                
                {/* 💥 FIX: Changed to a responsive grid layout. 
                    - grid-cols-1: Stacks vertically on mobile.
                    - md:grid-cols-3: Three columns on desktop.
                */}
                <div className="grid items-stretch grid-cols-1 gap-8 md:grid-cols-3">
                    
                    {/* Render the three cards */}
                    <AudioDemoCard agentNumber={1} />
                    <AudioDemoCard agentNumber={2} />
                    <AudioDemoCard agentNumber={3} />
                    
                </div>
            </div>
        </div>
    );
};

export default AIAgentDemos;