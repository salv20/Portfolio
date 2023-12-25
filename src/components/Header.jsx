import { useState } from "react"
const Header = () => {
    const [openNav, setopenNav] = useState(false)

    return (
        <header className="bg-headerLightBg md:bg-headerDarkBg ">
            <nav className="space-y-6 text-white md:text-navText text-sm md:text-base w-5/6 mx-auto py-6 md:space-y-0 md:flex justify-between">
                <div className="flex md:block justify-between text-gray-400">
                    <h1 className="text-lg md:text-xl uppercase font-bold text-white ">salvation.</h1>
                    <button
                        className="md:hidden text-base"
                        onClick={() => setopenNav(!openNav)}>
                        menu</button>
                </div>

                <ul className={`${!openNav ? 'hidden' : 'block'} bg-headerLightBg space-y-4 md:space-y-0 md:flex md:space-x-6`}>
                    <li>
                        <button>home</button>
                    </li>
                    <li>
                        <button>about</button>
                    </li>
                    <li>
                        <button>skills</button>
                    </li>
                    <li>
                        <button>services</button>
                    </li>
                    <li>
                        <button>projects</button>
                    </li>
                    <li>
                        <button>contact</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
