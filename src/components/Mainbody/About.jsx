import { motion } from "framer-motion"
const About = () => {
    const item1 = {
        initial: {
            opacity: 0,
            x: '-40%'
        },
        animate: {
            opacity: 1,
            x: '0%',
            transition: {
                duration: 1,
            }
        }
    }
    const item2 = {
        initial: {
            opacity: 0,
            y: '-40%'
        },
        animate: {
            opacity: 1,
            y: '0%',
            transition: {
                duration: 1,
                delay: 0.5,
            }
        }
    }
    const item3 = {
        initial: {
            opacity: 0,
            x: '10%'
        },
        animate: {
            opacity: 1,
            x: '0%',
            transition: {
                duration: 1,
                delay: 0.5,
            }
        }
    }
    return (
        <section
            className="about bg-headerLightBg text-white py-6"
        >
            <div className="w-5/6 mx-auto space-y-6 md:space-y-0 md:flex justify-between md:space-x-4">
                <motion.article
                    variants={item1}
                    viewport={{ once: true, amount: 0.5 }}
                    initial="initial"
                    whileInView="animate"
                    className="space-y-2 md:w-3/4 lg:w-1/2">
                    <h1 className=" uppercase text-gray-300">about me</h1>
                    <p>
                        I have been working in the tech industry for over a year,
                        and within that time I have gained a wealth of experience and knowledge
                        in Javascript and various frameworks.
                        I am always eager to learn more and stay up-to-date with the latest technologies;
                        i have an excellent communication skill and i&apos;m a good team player.
                    </p>
                </motion.article>

                <motion.article
                    variants={item2}
                    viewport={{ once: true, amount: 0.3 }}
                    initial="initial"
                    whileInView="animate"
                    className="capitalize space-y-2">
                    <h1 className=" uppercase text-gray-300">education</h1>
                    <div className="">
                        <p className=" uppercase">high school diploma</p>
                        <p>baptist high school</p>
                    </div>
                    <div className="">
                        <p className=" uppercase">frontend development</p>
                        <p>udemy</p>
                    </div>
                </motion.article>

                <motion.article
                    variants={item3}
                    viewport={{ once: true, amount: 0.3 }}
                    initial="initial"
                    whileInView="animate"
                    className="capitalize space-y-2">
                    <h1 className=" uppercase text-gray-300">experience</h1>
                    <div className="">
                        <p>company: climedia hub </p>
                        <p>date: december 2023 - january 2024</p>
                        <p>Job-type: contract</p>
                        <p>Role: frontend developer</p>
                    </div>
                </motion.article>
            </div>
        </section>
    )
}

export default About
