const images = ['/Glints.png', '/store.png', '/travel.png']
const liveWeb = ['https://glints-project.vercel.app/', 'https://seanstore-i01.vercel.app/', 'https://the-traveller-beta.vercel.app/']
const gitRepo = ['https://github.com/salv20/Glints', 'https://github.com/salv20/seanstore', 'https://github.com/salv20/TheTraveller']
const name = ['glints', 'store', 'travel-app']
import { FaGithub } from "react-icons/fa"
const Project = () => {
    return (
        <section className=' bg-headerDarkBg p-8 service'>
            <div className=" bg-headerLightBg w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center p-4 sm:p-6 gap-4">
                {
                    images.map((img, index) => (

                        <div className=" bg-navText  border-4 shadow-sm border-headerLightBg rounded-2xl" key={index}>
                            <a href={`${liveWeb[index]}`} >
                                <img src={`${img}`} alt="" className=" rounded-t-xl" />
                            </a>
                            <div className=" text-center uppercase">
                                <p>{name[index]}</p>
                                <a href={`${gitRepo[index]}`} className=" inline-block">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Project
