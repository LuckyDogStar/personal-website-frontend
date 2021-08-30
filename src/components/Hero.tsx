import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="md:h-screen bg-cover bg-hero-lg h-screen flex flex-col justify-center items-center">
            <h2 className="py-2 lg:text-7xl md:text-7xl sm:text-5xl text-2xl px-5 text-gray-700 font-volkhov">
                Hello, I'm
            </h2>
            <h1 className="py-2 lg:text-9xl md:text-7xl sm:text-5xl text-3xl px-5 font-volkhov">
                Ryan Driver
            </h1>
            <h3 className="py-2 lg:text-4xl md:text-3xl sm:text-1xl px-5 text-gray-700 font-volkhov">
                a Software Engineer & Web Developer
            </h3>
            <Link className='py-6 px-10 bg-purple-500 rounded-full text-3xl hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center animate-pulse' to="/contact" >Contact
                <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </Link>
        </div>
    )
}

export default Hero