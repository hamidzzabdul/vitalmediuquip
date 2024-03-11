// import { NavLink } from "react-router-dom"


import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import "./Category.scss"

import { Categories } from "../../../utils/data";
import { otherCategories } from '../../../utils/data';
import { NavLink } from "react-router-dom";

const Category = () => {
    const handleOnClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className='category-container'>
            <div className="category-header">
                <h2>Shop by Categories</h2>
                <div className="line" />
            </div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={2}
                infinite={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    950: {
                        slidesPerView: 7,
                    },
                    650: {
                        slidesPerView: 6,
                    },
                    500: {
                        slidesPerView: 5,
                    },
                    450: {
                        slidesPerView: 3,
                    },
                }}
                onSwiper={(swiper) => swiper.slideTo(1)}
            >

                {Categories.map(category => {
                    return (
                        <SwiperSlide key={category.name}>
                            <NavLink className="category-link" to={category.link} onClick={handleOnClick}>
                                <div className="img-container">
                                    <img src={category.icon} alt={category.name} />
                                </div>
                                <p>{category.name}</p>
                            </NavLink>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div className="other-categories">
                <div className="category-header">
                    <h2>Other industries</h2>
                    <div className="line" />
                </div>
                <div className="other-categories-container">
                    {otherCategories.map(category => {
                        return (
                            <NavLink to={category.link} onClick={handleOnClick} className="category-link" key={category.name}>
                                <div className="img-container">
                                    <img src={category.icon} alt={category.name} />
                                </div>
                                <p>{category.name}</p>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Category