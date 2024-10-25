/**
 * @copyright 2024 Snowflake
 * @licence Apache-2.0
 */

/**
 * Node Modules
 */
import { useState } from "react";

/**
 * Components
 */
import Navbar from "./Navbar";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/" className="logo">
                        <img 
                            src="/images/home/snowflake-2.svg" 
                            alt="Snowflake"
                            width={40}
                            height={40}
                        />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button 
                        className="menu-btn md:hidden fixed" 
                        onClick={() => setNavOpen(!navOpen)}
                        aria-expanded={navOpen}
                        aria-controls="navbar"
                    >
                        <div className="menu-icon">
                            <span className={`menu-line top ${navOpen ? 'active' : ''}`}></span>
                            <span className={`menu-line middle ${navOpen ? 'active' : ''}`}></span>
                            <span className={`menu-line bottom ${navOpen ? 'active' : ''}`}></span>
                        </div>
                        <span className="sr-only">{navOpen ? 'close' : 'menu'}</span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>

                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;