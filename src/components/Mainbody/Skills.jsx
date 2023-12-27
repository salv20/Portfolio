
const Skills = () => {
    return (
        <section className="bg-headerDarkBg text-white pt-4 pb-6 space-y-2">
            <h1 className=" uppercase text-center text-lg">my skills</h1>
            <div className="w-5/6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 text-center uppercase skill gap-4 bg-headerLightBg p-4 sm:p-8">
                <p>html</p>
                <p>vanilla css</p>
                <p>tailwind css</p>
                <p>javascript</p>
                <p>React js</p>
                <p>supabase</p>
            </div>
        </section>
    )
}

export default Skills
