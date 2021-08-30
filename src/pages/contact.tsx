import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineMail } from 'react-icons/ai'
import { GrGithub, GrLinkedin } from 'react-icons/gr'

const Contact = () => {
    return (
        <div className="h-screen w-screen p-7 flex flex-col justify-center items-center bg-contact-lg bg-cover md:flex-row">
            <IconContext.Provider value={{ size: "9em" }}>
                <div>
                    <p className="px-2">
                        <a href="mailto:mail@ryandriver.me"><AiOutlineMail />  </a>
                    </p>
                </div>
                <div>
                    <p className="px-2">
                        <a href="https://github.com/SugarCabinet"><GrGithub />  </a>
                    </p>
                </div>
                <div>
                    <p className="">
                        <a href="https://www.linkedin.com/in/ryanrdriver/"><GrLinkedin />  </a>
                    </p>
                </div>
            </IconContext.Provider>
        </div >
    )
}

export default Contact