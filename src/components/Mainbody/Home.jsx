import { FaGithub, FaDownload, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaTwitter } from 'react-icons/fa'

const Home = () => {
    return (
        <section className='flex-col-reverse md:flex-row flex w-5/6 mx-auto justify-between text-center md:text-left pb-4 md:pb-0 gap-y-8 md:gap-y-0'>
            <article className='space-y-4 capitalize'>
                <div className="text-lg md:text-xl  font-bold tracking-widest">
                    <h2>hello! i&apos;m </h2>
                    <h1 className='text-2xl md:text-3xl'>salvation amoke</h1>
                </div>
                <p className=' w-1/2 mx-auto md:w-auto'>fronted developer specializing in javascript & react js.</p>

                <div className=" space-y-4 grid text-left justify-center md:justify-start">
                    <p> <FaPhoneAlt className=' inline-block mr-2' /> (+234)9030866613</p>
                    <p className=' lowercase'> <FaRegEnvelope className=' inline-block mr-2' /> salvationamoke@gmail.com</p>
                    <p> <FaMapMarkerAlt className=' inline-block mr-2' /> Port harcout, rivers state</p>
                </div>

                <div className='flex space-x-6 pb-4 socials justify-center md:justify-start'>
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
                <button
                    className='mt-4 font-semibold capitalize border-2 py-3 px-6 rounded-3xl hover:bg-navText  hover:text-headerDarkBg transition-all duration-700'>
                    get resume <FaDownload className=' inline-block' />
                </button>
            </article>

            <article className='md:w-1/2 lg:w-1/3 mx-auto md:mx-0'>
                <img src="/me1.png" alt="" />
            </article>
        </section>
    )
}

export default Home
