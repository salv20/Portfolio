import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaTwitter } from 'react-icons/fa'

const Home = () => {
    return (
        <section className=' md:flex justify-around pb-4'>
            <article className="">
                <img src="/me.png" alt="" className=" w-64" />
            </article>

            <article className="grid gap-y-4 ">
                <div className="">
                    <h2> Hello everyone i am <span className=" uppercase font-semibold">salvation amoke, </span> a</h2>
                    <h3 className=' capitalize font-semibold'> fronted web developer</h3>
                </div>
                <p> <FaPhoneAlt className=' inline-block' /> (+234)9030866613</p>
                <p> <FaRegEnvelope className=' inline-block' /> salvationamoke@gmail.com</p>
                <p> <FaMapMarkerAlt className=' inline-block' /> Port harcout, rivers state</p>
                <div className=' flex space-x-6'>

                    <button>
                        <a href="https://twitter.com/Salvati75317889"><FaTwitter /></a>
                    </button>

                    <button>
                        <a href="https://www.linkedin.com/in/amoke-salvation-6b89a7248/"><FaLinkedin /></a>
                    </button>

                    <button>
                        <a href="https://github.com/salv20"><FaGithub /></a>
                    </button>
                </div>
            </article>
        </section>
    )
}

export default Home
