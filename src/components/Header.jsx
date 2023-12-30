import { useEffect } from "react"
import { ScrollInto } from "react-scroll-into-view"

const Header = ({ openNav, setopenNav }) => {
    const navOptions = ['home', 'about', 'skills', 'services', 'projects', 'contact']
    const sectionClass = ['home', 'about', 'skills', 'services', 'projects', 'contact']

    useEffect(() => {
        const head = document.querySelector('header')
        const imageArt = document.querySelector('.image')
        const observer = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    head.classList.remove('nav-active')
                    document.querySelector('main').style.top = '0px'
                } else {
                    head.classList.add('nav-active')
                    document.querySelector('main').style.top = `${head.clientHeight * 2}px`
                }
            }, {
            threshold: [0.5],
            root: document,
        }
        )
        observer.observe(imageArt)
    })


    return (
        <header className="bg-headerLightBg md:bg-headerDarkBg relative">
            <nav
                className={`space-y-6 text-white md:text-gray-400 w-5/6 mx-auto py-6 md:space-y-0 md:flex justify-between`}
            >
                <div className="flex md:block justify-between">
                    <h1 className="text-lg md:text-xl uppercase font-bold text-white ">salvation.</h1>
                    <button
                        className="md:hidden text-gray-400"
                        onClick={() => setopenNav(!openNav)}>
                        menu</button>
                </div>

                <ul className={`${openNav ? ' left-0' : ' -left-100'} md:left-0 absolute bg-headerLightBg w-full px-9 sm:px-16 sl:px-12 md:px-0 space-y-4 transition-all duration-1000 ease-in-out md:flex md:relative md:space-y-0 md:space-x-6 md:w-fit md:bg-transparent pb-6 md:pb-0`}>
                    {
                        navOptions.map((nav, index) => (
                            <li key={index}>
                                <button onClick={() => setopenNav(!openNav)}>
                                    <ScrollInto selector={`.${sectionClass[index]}`} smooth={true}>
                                        {nav}
                                    </ScrollInto>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>

    )
}

export default Header
