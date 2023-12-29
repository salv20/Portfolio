import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
const skillList = ['html/css', 'tailwind css', 'javascript', 'react js', 'supabase', 'communication']
const Skills = () => {
    return (
        <section className="bg-headerDarkBg text-white pt-4 pb-8 space-y-2">
            <h1 className=" uppercase text-center text-lg">my skills</h1>
            <div className="w-5/6 mx-auto bg-headerLightBg ">

                {/*SLIDE PER VIEW */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
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
                    modules={[Pagination, EffectCreative, Autoplay]}
                    className="sm:hidden uppercase bg-headerDarkBg"
                >
                    {
                        skillList.map((skill, index) => (
                            <SwiperSlide
                                key={index}
                                className=' bg-headerLightBg text-center py-20 rounded-xl lg:py-24'

                            >
                                <p>{skill}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>


                {/* THREE SLIDES PER VIEW */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    effect={'fade'}
                    modules={[Pagination, Autoplay]}
                    className="hidden sm:block uppercase bg-headerDarkBg"
                >
                    {
                        skillList.map((skill, index) => (
                            <SwiperSlide
                                key={index}
                                className=' bg-headerLightBg text-center py-20 rounded-xl lg:py-24'

                            >
                                <p>{skill}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default Skills
