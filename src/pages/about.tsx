import React from "react";
import profile from '.././images/profile.jpg'
import current from '.././images/current.jpg'


const About = () => {


    return (
        <div className="md:h-screen flex-shrink flex-col justify-center items-center flex flex-col bg-about-lg bg-cover">
            <div className="p-4">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-60 w-full object-cover md:h-full md:w-80" src={profile} alt="Ryan Driver">
                            </img>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-lg text-indigo-500 font-volkhov">Ryan Driver</div>
                            <h1 className="block mt-1 text-md leading-tight font-montserrat text-black">Senior Computer Science major at Edinboro University</h1>
                            <p className="mt-2 text-gray-500">I currently am the president of the computer science club and a competing member of the programming team at Edinboro University. I have a passion for learning new languages and tools and am looking to
                                grow as a software engineer and web developer.  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={current} alt="Black labrador puppy running with tennis ball">
                            </img>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-lg text-indigo-500 font-volkhov">Dog Trainer</div>
                            <h1 className="block mt-1 text-md leading-tight font-montserrat text-black">Sundance Retrievers</h1>
                            <p className="mt-2 text-gray-500"> I collaborate with a team to train both companion and service dogs according to client needs.
                                I evaluate each dog to ensure it meets the client's expectations and is adequately progressing to meet its expected go-home date. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About