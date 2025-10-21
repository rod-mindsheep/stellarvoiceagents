// --- 1. WaveForm Component (now controlled by isPlaying prop using inline style) ---
const Waveform = ({ isPlaying }) => {
    const bars = Array.from({ length: 12 });
    
    // Determine the animation play state
    const animationState = isPlaying ? 'running' : 'paused';

    return (
        <div className="waveform">
            {bars.map((_, idx) => (
                <div
                    key={idx}
                    className="wave-bar"
                    // Reverting animationDelay to 0.1s to restore original appearance/timing
                    style={{ 
                        animationDelay: `${idx * 0.1}s`,
                        animationPlayState: animationState
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Waveform;