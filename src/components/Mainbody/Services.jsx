import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

const images = ['/web-dev.png', '/teach.png', '/baas.png']
const role = ['frontend developmet', 'coaching and mentorship', 'baas']
const tools = [
    ['html/css', 'javascript', 'tailwind', 'react', 'supabase'],
    ['html/css', 'tailwind', 'javascript', 'react', 'supabase'],
    ['supabase', 'Postgres database', 'user authentication', ' AI toolkit']
]
const Services = () => {
    return (
        <section className="service bg-headerLightBg py-12 text-navText">
            <div className="w-5/6 mx-auto space-y-8 capitalize">
                <h2 className=' md:text-lg font-semibold tracking-widest'>|| my services</h2>
                <h1 className=' text-lg sm:text-xl md:text-3xl tracking-wider'>services i offer to my clients: </h1>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -500],
                        },
                        next: {
                            shadow: true,
                            translate: ['100%', 0, 0],
                        },
                    }}
                    modules={[Pagination, EffectCreative]}
                    className="md:hidden"
                >
                    {
                        images.map((imgs, index) => (
                            <SwiperSlide
                                key={index}
                                className='bg-headerDarkBg space-y-6 text-center py-8 shadow-lg rounded-xl swiped relative'
                            >
                                <div className="box1"></div>
                                <img src={`${imgs}`} alt="" className='w-32 mx-auto' />
                                <h1 className='uppercase'>{role[index]}</h1>
                                <ol className='space-y-2 text-lg text-gray-400'>
                                    {
                                        tools[index].map((tool, index) => (
                                            <li key={index}>{tool}</li>
                                        ))
                                    }
                                </ol>
                                <div className="box2"></div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                {/* TWO SLIDES PER VIEW */}

                <Swiper
                    slidesPerView={2}
                    spaceBetween={60}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="hidden md:block lg:hidden"
                >
                    {
                        images.map((imgs, index) => (
                            <SwiperSlide
                                key={index}
                                className='bg-headerDarkBg space-y-6 text-center py-8 shadow-lg rounded-xl swiped relative'
                            >
                                <div className="box1"></div>
                                <img src={`${imgs}`} alt="" className='w-32 mx-auto' />
                                <h1 className='uppercase'>{role[index]}</h1>
                                <ol className='space-y-2 text-lg text-gray-400'>
                                    {
                                        tools[index].map((tool, index) => (
                                            <li key={index}>{tool}</li>
                                        ))
                                    }
                                </ol>
                                <div className="box2"></div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                {/* THREE SLIDES PER VIEW */}

                <Swiper
                    slidesPerView={3}
                    spaceBetween={60}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="hidden lg:block"
                >
                    {
                        images.map((imgs, index) => (
                            <SwiperSlide
                                key={index}
                                className='bg-headerDarkBg space-y-6 text-center py-8 shadow-lg rounded-xl swiped relative'
                            >
                                <div className="box1"></div>
                                <img src={`${imgs}`} alt="" className='w-32 mx-auto' />
                                <h1 className='uppercase'>{role[index]}</h1>
                                <ol className=' space-y-2 text-lg text-gray-400'>
                                    {
                                        tools[index].map((tool, index) => (
                                            <li key={index}>{tool}</li>
                                        ))
                                    }
                                </ol>
                                <div className="box2"></div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default Services
