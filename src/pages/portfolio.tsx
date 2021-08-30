import React from "react";
import investifull from '.././images/investifull.png'
import blackjack from '.././images/blackjack-app.png'
import site from '.././images/personal-site.jpg'
import planet from '.././images/planet-trivia.png'




const Portfolio = () => {
    return (
        <div className=" flex  flex-col justify-center items-center flex flex-col bg-portfolio-lg bg-cover">
            <div className="p-2">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-36 w-full object-cover md:h-full md:w-48" src={investifull} alt="a fullerene graphic">
                            </img>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-lg text-indigo-500 font-volkhov">InvestiFull</div>
                            <h1 className="block mt-1 text-md leading-tight font-montserrat text-black hover:underline"><a href="https://github.com/SugarCabinet/InvestiFull">Analysis tool used by graph theorists</a></h1>
                            <p className="mt-2 text-gray-500"> Improved tools for the topological analysis of a fullerene by creating a python program that interfaces with a spiral
                                algorithm in Fortran and an SQLite database. Providing the user with an efficient method to analyze and store data on
                                the topology of a fullerene. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-36 w-full object-cover md:h-full md:w-48" src={site} alt="site logo old republic">
                            </img>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-lg text-indigo-500 font-volkhov">Personal Site</div>
                            <h1 className="block mt-1 text-md leading-tight font-montserrat text-black hover:underline"><a href="https://github.com/SugarCabinet/personal-website-frontend">Personal project website</a></h1>
                            <p className="mt-2 text-gray-500"> Designed and developed a personal site using React, TypeScript, and Tailwind CSS.
                                Site hosting and management are handled using Amazon Web Services. AWS products include S3, Cloudfront, DynamoDB, Lambda, Route53.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-36 w-full object-cover md:h-full md:w-48" src={blackjack} alt="blackjack app table">
                            </img>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-lg text-indigo-500 font-volkhov">Blackjack Mobile App</div>
                            <h1 className="block mt-1 text-md leading-tight font-montserrat text-black hover:underline"><a href="https://github.com/SugarCabinet/Blackjack-App">Four deck Blackjack Android app</a></h1>
                            <p className="mt-2 text-gray-500"> Developed a Java app that allows the user to fully simulate a four-deck blackjack game and place bets on each hand
                                outcome. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-36 w-full object-cover md:h-full md:w-48" src={planet} alt="planet with ring">
                            </img>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-lg text-indigo-500 font-volkhov">Planet Trivia App</div>
                            <h1 className="block mt-1 text-md leading-tight font-montserrat text-black hover:underline"><a href="https://github.com/SugarCabinet/Trivia-App">Space trivia Android app</a></h1>
                            <p className="mt-2 text-gray-500"> Developed a trivia app in Java that stores questions and answers in an SQLite database. The user can quiz themselves on
                                the stored trivia questions or manage the database and add their own questions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio