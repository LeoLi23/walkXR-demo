import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='flex flex-col w-full h-full items-center justify-center bg-gray-100 text-gray-800 p-8'>
            <div className='max-w-screen-lg mx-auto space-y-8'>
                <h1 className='text-6xl font-bold mb-8 ml-4'>Welcome to WalkXR</h1>
                <p className='text-black text-2xl leading-relaxed px-6'>
                Dive into WalkXR, a novel immersive therapeutic platform designed to navigate a spectrum of human emotions. This transformative experience, amplified by multimedia, helps unravel emotional intricacies, be it grief, despair, awe, or humor. 
                <br /><br />
                WalkXR's unique virtual journeys offer solace, understanding, and a fresh perspective, especially useful for individuals wrestling with personal challenges or emotional distress. 
                <br /><br />
                Embark on a journey of emotional exploration with WalkXR. Uncover insights, find strength, and achieve a renewed sense of serenity.
                </p>
                
                <div className='flex justify-center mt-4'>
                    <Link to="/museums" className='inline-block py-4 px-20 bg-purple-500 text-white rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:bg-purple-600'>Enter Museums</Link>
                </div>
            </div>
        </div> 
    );
};

export default LandingPage;