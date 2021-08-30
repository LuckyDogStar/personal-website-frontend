import React from "react";
import { IconContext } from "react-icons"
import { SiGithub, SiLinkedin } from 'react-icons/si'
const Footer = () => {
    fetch(' https://api.ryandriver.me/put')
        .then(() => fetch(' https://api.ryandriver.me/get'))
        .then(response => response.json())
        .then((data) => {
            document.getElementById('replaceme')!.innerText = data.count
        })
    return (

        <div className="flex px-2 justify-between items-center h-16 bg-black text-white">
            <p className="px-2">
                Visitors:
                <span id="replaceme" />
            </p>
            <p>Copyright © 2021 Ryan Driver</p>

            <div className="flex px-2 justify-between items-center h-16 bg-black text-white">

                <IconContext.Provider value={{ size: "1.5em" }}>
                    <p className="px-2">

                        <a href="https://github.com/SugarCabinet"><SiGithub /> </a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/ryanrdriver/"><SiLinkedin />  </a>
                    </p>
                </IconContext.Provider>
            </div>
        </div>

    )
}

export default Footer