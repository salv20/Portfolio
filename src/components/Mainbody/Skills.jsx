import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
const skillList = ['html/css', 'tailwind css', 'javascript', 'react js', 'supabase', 'communication']
const Skills = () => {
    return (
        <section className="bg-headerDarkBg text-white pt-4 pb-6 space-y-2">
            <h1 className=" uppercase text-center text-lg">my skills</h1>
            <div className="w-5/6 mx-auto bg-headerLightBg ">

                {/* THREE SLIDES PER VIEW */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
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
                    className="hidden sm:block text-center uppercase bg-headerDarkBg"
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

                {/*SLIDE PER VIEW */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
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
                    className="sm:hidden text-center uppercase bg-headerDarkBg"
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
