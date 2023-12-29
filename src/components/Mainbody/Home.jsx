import { FaGithub, FaDownload, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Home = () => {
    const container = {
        initial: {
            opacity: 0,
            x: '-20%'
        },
        animate: {
            opacity: 1,
            x: '0%',
            transition: {
                duration: 1,
                type: 'Tween',
            }
        }
    }

    const container1 = {
        initial: {
            opacity: 0,
            y: '-40%'
        },
        animate: {
            opacity: 1,
            y: '0%',
            transition: {
                delay: 2,
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

    return (
        <motion.section className='flex-col-reverse md:flex-row flex w-5/6 mx-auto justify-between text-center md:text-left pb-4 gap-y-8 md:gap-y-0'

        >
            <motion.article className='space-y-4 capitalize'
                variants={container}
                viewport={{ once: true, amount: 0.3 }}
                initial="initial"
                whileInView="animate"
            >
                <motion.div className="text-lg md:text-xl  font-bold tracking-widest"
                    initial={{
                        opacity: 0,
                        y: "-20%"

                    }}
                    animate={{
                        opacity: 1,
                        y: '0%',
                        transition: {
                            delay: 1,
                            duration: 1,

                        }
                    }}
                >
                    <h2>hello! i&apos;m </h2>
                    <h1>salvation amoke</h1>
                </motion.div>
                <motion.p
                    initial={{
                        opacity: 0,
                        x: "-30%"

                    }}
                    animate={{
                        opacity: 1,
                        x: '0%',
                        transition: {
                            delay: 1.5,
                            duration: 1,

                        }
                    }} >
                    frontend developer specializing in javascript & react js.</motion.p>

                <div className=" space-y-4 grid text-left justify-center md:justify-start">
                    <p> <FaPhoneAlt className=' inline-block mr-2' /> (+234)9030866613</p>
                    <p className=' lowercase'> <FaRegEnvelope className=' inline-block mr-2' /> salvationamoke@gmail.com</p>
                    <p> <FaMapMarkerAlt className=' inline-block mr-2' /> Port harcout, rivers state</p>
                </div>

                <motion.div
                    className='flex space-x-6 pb-4 socials justify-center md:justify-start'
                    variants={container1}
                >
                    <motion.button variants={item} >
                        <a href="https://twitter.com/Salvati75317889"><FaTwitter /></a>
                    </motion.button>

                    <motion.button variants={item} >
                        <a href="https://www.linkedin.com/in/amoke-salvation-6b89a7248/"><FaLinkedin /></a>
                    </motion.button>

                    <motion.button variants={item} >
                        <a href="https://github.com/salv20"><FaGithub /></a>
                    </motion.button>
                </motion.div>
                <button
                    className='mt-4 font-semibold capitalize border-2 py-3 px-6 rounded-3xl hover:bg-navText  hover:text-headerDarkBg transition-all duration-700'>
                    <a href="/resume.docx" download > get resume <FaDownload className=' inline-block' /></a>
                </button>
            </motion.article>

            <motion.article className='mx-auto'
                initial={
                    {
                        opacity: 0,
                        x: '10%'
                    }
                }
                animate={{
                    opacity: 1,
                    x: "0%",
                    transition: {
                        duration: 2,
                        type: 'just',
                        delay: 1
                    }
                }}
                whileInView='animate'
                viewport={{ amount: 0.3, once: true }}
            >
                <img src="/me2.png" alt="" />
            </motion.article>
        </motion.section>
    )
}

export default Home
