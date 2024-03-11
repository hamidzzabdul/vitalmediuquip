
import "./Hero.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import { heroContent, heroContent2 } from "../../../utils/data";

import HeroContent from "../Common/HeroContent";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";

import hero1 from "../../assets/hero/hero1.jpg"
import mobileHero from "../../assets/hero/bannerMobile.png"
import FirstSlider from "../Common/FirstSliderContent";
import SecondSliders from "../Common/SecondSliders";

const Hero = () => {
    const sliderRef = useRef(null)
    const scrollRef = useRef(null)
    const scrollContainer = scrollRef.current
    const [isMobile, setIsMobile] = useState(false);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, [])

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 670);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section ref={scrollRef}>
            <Swiper
                ref={sliderRef}
                slidesPerView={1}
                speed={1000}
                onSwiper={swiper => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="first-slider">
                    <FirstSlider title="Exclusive Distributors of Dirui Products" btnName="View Dirui Products" description="We offer a wide range of healthcare solutions for your medical needs, including laboratory, surgical, dental etc as well as machine services and maintenance." image={isMobile ? mobileHero : hero1} />
                </SwiperSlide>

                {heroContent.map((hero) => (
                    <SwiperSlide key={hero.title}>
                        <HeroContent
                            title={hero.title}
                            image={hero.image}
                            name={hero.name}
                            btnName={"View Product"}
                            description={hero?.description}
                            scrolRef={scrollContainer}
                        />
                    </SwiperSlide>
                ))}
                {heroContent2.map((hero) => (
                    <SwiperSlide key={hero.title}>
                        <SecondSliders
                            title={hero.title}
                            image={hero.image}
                            name={hero.name}
                            btnName={"View Product"}
                            description={hero?.description}
                            scrolRef={scrollContainer}
                        />
                    </SwiperSlide>
                ))}
                <div className="prev" onClick={handlePrev}>
                    <FaAngleLeft className="prev-icon" />
                </div>
                <div className="next" onClick={handleNext}>
                    <FaAngleRight className="next-icon" />
                </div>
            </Swiper>
        </section >
    )
}

export default Hero