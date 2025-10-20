import React from 'react';
import AudioDemoCard from '@/components/ui/AudioDemoCard.jsx'; // Import the reusable component

// --- 3. AIAgentDemos Component (Main Export) ---
const AIAgentDemos = () => {
    return (
        // 💥 FIX: Removed fixed w-[80vw] sizing. Use w-full for fluid width.
        <div className="flex flex-col items-center py-6 w-full z-5">
            
            {/* Content wrapper to center the cards and apply padding */}
            <div className="mx-auto px-4 max-w-7xl w-full">
                
                {/* 💥 FIX: Changed to a responsive grid layout. 
                    - grid-cols-1: Stacks vertically on mobile.
                    - md:grid-cols-3: Three columns on desktop.
                */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    
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