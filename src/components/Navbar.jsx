import React from 'react'
import {css} from "../../styled-system/css";
import {circle, stack} from "../../styled-system/patterns";

const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center content-center gap-5">
                <h1 className="logo">piko.ai</h1>
                <ul className="flex gap-2 items-center">
                    <li>
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/>
                    </li>
                    <li>
                        <img/>
                    </li>
                    <li>
                        <img/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
