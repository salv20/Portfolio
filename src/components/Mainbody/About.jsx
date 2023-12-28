
const About = () => {
    return (
        <section className="about bg-headerLightBg text-white py-6">
            <div className="w-5/6 mx-auto space-y-6 md:space-y-0 md:flex justify-between md:space-x-4">
                <article className="space-y-2 md:w-3/4 lg:w-1/2">
                    <h1 className=" uppercase text-gray-300">about me</h1>
                    <p>
                        I have been working in the tech industry for over a year,
                        and within that time I have gained a wealth of experience and knowledge
                        in Javascript and various frameworks.
                        I am always eager to learn more and stay up-to-date with the latest technologies;
                        i have an excellent communication skill and i&apos;m a good team player.
                    </p>
                </article>

                <article className="capitalize space-y-2">
                    <h1 className=" uppercase text-gray-300">education</h1>
                    <div className="">
                        <p className=" uppercase">high school diploma</p>
                        <p>baptist high school</p>
                    </div>
                    <div className="">
                        <p className=" uppercase">frontend development</p>
                        <p>udemy</p>
                    </div>
                </article>

                <article className="capitalize space-y-2">
                    <h1 className=" uppercase text-gray-300">experience</h1>
                    <div className="">
                        <p>company: climedia hub </p>
                        <p>date: december 2023 - january 2024</p>
                        <p>Job-type: contract</p>
                        <p>Role: frontend developer</p>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default About
