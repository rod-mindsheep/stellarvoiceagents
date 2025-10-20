'use client';
import React, { useState } from 'react';

// Define common colors to make the code cleaner
const COLOR_PRIMARY = '#25005D';
const COLOR_ACCENT = '#7868F8';
const COLOR_TEXT_NORMAL = '#1A1A1A';
const COLOR_WHITE = 'white';

// The FeatureCard component is reused for each of the six points
const FeatureCard = ({ iconUrls, title, description }) => {
    // State to track if the mouse is hovering over the card
    const [isHovered, setIsHovered] = useState(false);

    // Determine which image source to use based on the hover state
    const iconSrc = isHovered ? iconUrls.hover : iconUrls.normal;

    const descriptionText = isHovered ? description.hover : description.normal;

    // Conditionally set CSS classes/styles
    const cardBg = isHovered ? `bg-[${COLOR_ACCENT}]` : 'bg-white';
    const iconContainerBg = isHovered ? `bg-white` : `bg-[${COLOR_PRIMARY}]`;
    const titleColor = isHovered ? `text-white` : `text-[${COLOR_PRIMARY}]`;
    const descriptionColor = isHovered ? `text-white` : `text-[${COLOR_TEXT_NORMAL}]`;


    return (
        <div 
            // Use the dynamic cardBg class, removing the Tailwind hover utility 
            className={`py-[30px] px-[45px] h-[398px] rounded-xl shadow-md flex flex-col items-start transition duration-300 ${cardBg} ${isHovered ? 'shadow-xl' : ''}`}
            // Event handlers to manage the hover state
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            {/* Icon Container: Use conditional background based on state */}
            <div className={`mb-6 p-4 rounded-full ${iconContainerBg} text-center mx-auto`}>
                <img
                    src={iconSrc}
                    alt={`${title} icon`}
                    className="w-[65px] h-[65px] object-contain"
                />
            </div>
            
            {/* Title: Use conditional text color based on state */}
            <h3 className={`text-[25px] font-extrabold uppercase mb-3 tracking-wider text-center ${titleColor}`}>
                {title}
            </h3>
            
            {/* Description: Use dangerouslySetInnerHTML */}
            <p 
                className={`normal-case leading-relaxed text-[20px] font-normal flex-grow text-center ${descriptionColor}`}
                // 💥 FIX: Use dangerouslySetInnerHTML to render the HTML string 💥
                dangerouslySetInnerHTML={{ __html: descriptionText }}
            />
        </div>
    );
};

export default FeatureCard;