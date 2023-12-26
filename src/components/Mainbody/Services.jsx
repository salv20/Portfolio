import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaComputer, } from 'react-icons/fa6'
const Services = () => {
    return (
        <section className=" bg-headerLightBg py-12 text-navText">
            <div className="w-4/5 mx-auto space-y-8 capitalize">
                <h2 className=' md:text-lg font-semibold tracking-widest'>|| my services</h2>
                <h1 className=' text-lg sm:text-xl md:text-3xl tracking-wider'>services i offer to my clients: </h1>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper hidden md:block"
                >
                    <SwiperSlide className='bg-headerDarkBg space-y-8 text-center py-8 swiped'>
                        <img src="/web-dev.png" alt="" className='w-32 mx-auto' />
                        <h1>frontend developmet</h1>
                        <ol className=' space-y-2 text-lg text-gray-400'>
                            <li>html/css</li>
                            <li>javascript</li>
                            <li>animation</li>
                            <li>react</li>
                            <li>supabase</li>
                        </ol>

                    </SwiperSlide>
                    <SwiperSlide>

                        <article className=" bg-headerDarkBg w-full">
                            <FaComputer />
                            <h1>frontend developmet</h1>
                            <ol>
                                <li>html/css</li>
                                <li>javascript</li>
                                <li>animation</li>
                                <li>react</li>
                                <li>supabse</li>
                            </ol>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className=" bg-headerDarkBg w-full">
                            <FaComputer />
                            <h1>frontend developmet</h1>
                            <ol>
                                <li>html/css</li>
                                <li>javascript</li>
                                <li>animation</li>
                                <li>react</li>
                                <li>supabse</li>
                            </ol>
                        </article>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default Services
