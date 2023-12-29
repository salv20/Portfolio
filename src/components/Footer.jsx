import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
const Footer = () => {
    return (
        <footer className=" sm:text-center bg-headerLightBg text-navText py-6">
            <div className=" w-5/6 mx-auto space-y-4">
                <p>
                    Frontend Developer Specializing In Javascript & React Js,
                    eager to learn more and stay up-to-date with the latest technologies.
                </p>
                <div className='flex space-x-6 socials1 sm:justify-center '>
                    <button>
                        <a href="https://twitter.com/Salvati75317889"><FaTwitter /></a>
                    </button>

                    <button>
                        <a href="https://www.linkedin.com/in/amoke-salvation-6b89a7248/"><FaLinkedin /></a>
                    </button>

                    <button>
                        <a href="https://github.com/salv20"><FaGithub /></a>
                    </button>
                </div>
            </div>

        </footer>
    )
}

export default Footer
