const Header = ({ openNav, setopenNav }) => {

    return (
        <header className="bg-headerLightBg md:bg-headerDarkBg relative">
            <nav
                className="space-y-6 text-white md:text-gray-400 w-5/6 mx-auto py-6 md:space-y-0 md:flex justify-between"
            >
                <div className="flex md:block justify-between">
                    <h1 className="text-lg md:text-xl uppercase font-bold text-white ">salvation.</h1>
                    <button
                        className="md:hidden text-gray-400"
                        onClick={() => setopenNav(!openNav)}>
                        menu</button>
                </div>

                <ul className={`${openNav ? ' left-0' : ' -left-100'} md:left-0 absolute bg-headerLightBg w-full px-9 sm:px-16 sl:px-12 md:px-0 space-y-2 transition-all duration-1000 ease-in-out md:flex md:relative md:space-y-0 md:space-x-6 md:w-fit md:bg-transparent pb-6 md:pb-0`}>
                    <li>
                        <button onClick={() => setopenNav(!openNav)}>home</button>
                    </li>
                    <li>
                        <button onClick={() => setopenNav(!openNav)}>about</button>
                    </li>
                    <li>
                        <button onClick={() => setopenNav(!openNav)}>skills</button>
                    </li>
                    <li>
                        <button onClick={() => setopenNav(!openNav)}>services</button>
                    </li>
                    <li>
                        <button onClick={() => setopenNav(!openNav)}>projects</button>
                    </li>
                    <li>
                        <button onClick={() => setopenNav(!openNav)}>contact</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
