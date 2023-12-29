
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

const images = ['/Glints.png', '/store.png', '/travel.png']
const liveWeb = ['https://glints-project.vercel.app/', 'https://seanstore-i01.vercel.app/', 'https://the-traveller-beta.vercel.app/']
const gitRepo = ['https://github.com/salv20/Glints', 'https://github.com/salv20/seanstore', 'https://github.com/salv20/TheTraveller']
const name = ['glints', 'store', 'travel-app']

const container = {
    initial: {
        opacity: 0,
        x: '-40%'
    },
    animate: {
        opacity: 1,
        x: '0%',
        transition: {
            delay: 0.5,
            duration: 2,
            type: 'Tween',
            staggerChildren: 1
        }
    }
}

const item = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        delay: 0.5,
    }
}
const Project = () => {
    return (
        <section className=' bg-headerDarkBg py-8'>
            <motion.div
                className=" w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-4"
                variants={container}
                viewport={{ once: true, amount: 0.3 }}
                initial="initial"
                whileInView="animate"
            >
                {
                    images.map((img, index) => (

                        <motion.div
                            className=" bg-navText rounded-xl" key={index}
                            variants={item}
                        >
                            <a href={`${liveWeb[index]}`} >
                                <img src={`${img}`} alt="" className=" rounded-t-lg" />
                            </a>
                            <div className=" text-center uppercase space-y-1 py-2">
                                <p>{name[index]}</p>
                                <a href={`${gitRepo[index]}`} className=" inline-block text-xl">
                                    <FaGithub />
                                </a>
                            </div>
                        </motion.div>
                    ))
                }

            </motion.div>
        </section>
    )
}

export default Project
