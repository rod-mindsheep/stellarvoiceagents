import React from 'react';

const Footer = () => {
    // Placeholder image URL for the main woman's photo - replace with your actual import or path
    const imageUrl = "/woman-footer.png"; 
    // New variables for responsive wave visualizer images
    const waveImageUrldesktop = "/footer-wave-cropped.png"; 
    const waveImageUrlmobile = "/footer-wave-full.png";

    // NOTE: The WaveVisualizer component has been removed as requested.

    return (
        // Outer container with the dark purple background and specific styling
        <div id="contactus" className="bg-[#25005D] py-16 md:p-12 lg:p-20 text-white font-proxima md:h-[1233px] h-auto rounded-tl-[30px] rounded-tr-[30px] md:rounded-tr-[50px] md:rounded-tl-[50px] shadow-2xl w-full mx-auto">
            
            {/* 1. Top Section (Image, CTA Text, and Wave Visualizer) */}
            {/* This container now acts as the bounding box for the absolute wave image and holds the bottom border. */}
            <div className="relative md:border-b px-8 md:px-0 border-white border-opacity-30 pb-12 md:pb-24 flex flex-col lg:flex-row items-center justify-items-center w-full md:w-[80vw] mx-auto">
                
                {/* Content Wrapper for CTA and Image (to prevent absolute wave from disrupting layout) */}
                <div className="flex flex-col lg:flex-row items-center justify-items-center w-full z-20">
                    
                    {/* Left Side: Image (Hidden on small screens based on user's original code) */}
                    <div className="hidden relative w-full md:w-1/2 md:flex justify-center mb-8 lg:mb-0">
                        <div className="p-0">
                            {/* The white box in the design is implied here by the positioning */}
                            <img 
                                src={imageUrl} 
                                alt="Woman on a client call"
                                className="w-full h-[697px] object-cover" 
                                style={{ 
                                    // Adjust this based on your actual image and frame size 
                                    marginTop: '-30px', 
                                    marginLeft: '-15px',
                                    objectPosition: 'center top' 
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Side: Heading and Button */}
                    <div className="w-full md:w-1/2 md:max-w-[720px] flex flex-col items-center md:items-start text-center md:text-left pt-6 lg:pt-0 normal-case z-10">
                        <h1 className="text-[30px] md:text-[85px] text-[#7868F8] md:text-white uppercase md:normal-case font-black lg:text-6xl md:font-extrabold leading-[25px] md:leading-tight mb-4">
                            Ready to hear how AI can handle your next client call?
                        </h1>
                        <p className="text-[15px] md:text-[25px] mb-8 max-w-md lg:max-w-none">
                            Book a quick demo and experience how Stellar Voice Agents turn leads into appointments — automatically.
                        </p>
                        <button className="bg-[#7868F8] border-1 border-[#F3F3F3] hover:bg-[#6A5AF5] cursor-pointer text-white font-bold mt-20 md:mt-0 py-[8px] px-[15px] md:py-[15px] uppercase md:px-[35px] rounded-md text-[20px] md:text-[25px] transition duration-300 shadow-xl tracking-wider">
                            Book a call with Gary!
                        </button>
                    </div>
                </div>

                {/* 2. Image Visualizer - ABSOLUTE POSITIONED at Bottom Right */}
                {/* The pb-24 padding on the parent container ensures space for this element at the bottom. */}
                <div className="absolute bottom-[-90px] md:bottom-[-1px] right-0 w-full md:w-[1236px] h-auto pointer-events-none z-10"> 
                    {/* Desktop Image: Constrained width for bottom-right effect */}
                    <img
                        src={waveImageUrldesktop}
                        alt="Wave audio visualizer graphic desktop"
                        className="w-full h-auto object-cover hidden md:block"
                    />
                    {/* Mobile Image: Full width on mobile, centered (UPDATED) */}
                    <img
                        src={waveImageUrlmobile}
                        alt="Wave audio visualizer graphic mobile"
                        className="w-[639px] h-[317px] object-cover md:hidden"
                    />
                </div>
            </div>
            {/* The standalone <hr> element is now removed, replaced by the border-b on the section above. */}

            {/* 3. Bottom Section (Contact and Logo) */}
            {/* Reduced pt-4 to pt-12 to compensate for the removed HR and spacing above. */}
            <div className="flex flex-col md:flex-row items-start justify-between pt-16 w-[313px] md:w-[1236px] mx-auto normal-case">
                
                {/* Left Side: Contact Form/Question */}
                <div className="mb-6 md:mb-0 w-full md:w-auto text-center md:text-left">
                    <p className="text-[25px] md:text-[40px] mb-0 md:mb-2">
                        Do you have any questions?
                    </p>
                    <p className="text-[15px] md:text-[20px] mb-5 md:mb-9 opacity-80">
                        Feel free to send us your questions.
                    </p>
                    <form className="flex w-full md:w-96">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email"
                            className="bg-transparent mx-auto md:mx-0 h-[46px] w-[251px] border-[0.5px] border-white rounded-[8px] border-opacity-50 focus:border-opacity-100 py-[5px] px-[20px] text-white text-base focus:outline-none placeholder-gray-400"
                        />
                    </form>
                </div>

                {/* Right Side: Logo and Copyright */}
                <div className="flex flex-col items-end w-full md:w-auto mt-7 md:mt-0">
                    {/* Stellar Voice Agents Logo (Simplified) */}
                    <div className="flex items-center space-x-2 mb-2 mx-auto md:mx-0">
                        {/* Star icon */}
                        <img
                            src="/footer-logo.png"
                            alt="Logo"
                            className="w-[150px] h-[45px] md:w-[257px] md:h-[76px]"
                        />
                    </div>
                    {/* NOTE: Copyright text removed from here */}
                </div>
            </div>

            {/* 4. Copyright Section (Separate, Bottom Right) */}
            <div className="w-[313px] md:w-[1236px] mx-auto pt-6 md:pt-12 flex justify-center md:justify-end">
                <p className="text-[12px] font-poppins font-semibold opacity-50 normal-case">
                    © 2025 — Copyright
                </p>
            </div>
        </div>
    );
};

export default Footer;

