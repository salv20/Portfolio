const images = ['/Glints.png', '/store.png', '/travel.png']
const liveWeb = ['https://glints-project.vercel.app/', 'https://seanstore-i01.vercel.app/', 'https://the-traveller-beta.vercel.app/']
const gitRepo = ['https://github.com/salv20/Glints', 'https://github.com/salv20/seanstore', 'https://github.com/salv20/TheTraveller']
const name = ['glints', 'store', 'travel-app']
import { FaGithub } from "react-icons/fa"
const Project = () => {
    return (
        <section className=' bg-headerDarkBg py-8'>
            <div className=" w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-4">
                {
                    images.map((img, index) => (

                        <div className=" bg-navText rounded-xl" key={index}>
                            <a href={`${liveWeb[index]}`} >
                                <img src={`${img}`} alt="" className=" rounded-t-lg" />
                            </a>
                            <div className=" text-center uppercase space-y-1 py-2">
                                <p>{name[index]}</p>
                                <a href={`${gitRepo[index]}`} className=" inline-block text-xl">
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
