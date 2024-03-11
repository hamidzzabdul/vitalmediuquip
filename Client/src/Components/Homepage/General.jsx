import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Product from "./product/Product";

import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { generateIdToNameMap, generateIdToSlugMap } from "../../../utils/mapUtil";
import { scrolltoTopHandler } from "../../../utils/scrolltotopHandler";
import "./products.scss"
import WishlistIcon from "../Common/WishlistIcon";
import Tooltip from "../Common/ToolTip";
import useWishlist from "../../Hooks/useWishList";

const text = "Add to wishList";

const General = ({ products, subCategories, categories }) => {
    const { favouriteStatus } = useWishlist()

    const catgegoryMap = generateIdToNameMap(categories);
    const subCatgegoryMap = generateIdToNameMap(subCategories);
    const categorySlugs = generateIdToSlugMap(categories);
    const subCategorySlugs = generateIdToSlugMap(subCategories);

    const GeneralProducts = products.filter(product => {
        return product.category === "64f091c16e37c3bdaf23e64a"
    })
    const renderProducts = GeneralProducts.slice(0, 10)
    return (
        <div className="products-wrapper">
            <div className="category-header">
                <h2 className="title">General Hospital</h2>
                <div className="line" />
            </div>

            <Swiper
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                // slidesPerView={8}
                infinite="true"
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    950: {
                        slidesPerView: 6,
                    },
                    650: {
                        slidesPerView: 3,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    450: {
                        slidesPerView: 1
                    }
                }}
            >
                {renderProducts.map(product => {
                    const subCategoryName = subCatgegoryMap[product.subCategory] || "unknown Category";
                    const categoryName = catgegoryMap[product.category] || "unknown Category";
                    return (<SwiperSlide key={product._id}>
                        <Tooltip text={!favouriteStatus[product._id] ? text : "Remove from wishlist"}>
                            <WishlistIcon product={product} allProducts={products} categoryName={categoryName} />
                        </Tooltip>
                        <NavLink to={
                            subCategoryName === "unknown Category"
                                ? `/allProducts/${categorySlugs[product.category]}/all/${product.slug}`
                                : `/allProducts/${categorySlugs[product.category]}/${subCategorySlugs[product.subCategory]}/${product.slug}`
                        } onClick={scrolltoTopHandler}>
                            <Product image={product.productImage} name={product.name} subCategory={subCategoryName} />
                        </NavLink>
                    </SwiperSlide>)
                })}

            </Swiper>
        </div>
    )
}

General.propTypes = {
    products: PropTypes.array,
    subCategories: PropTypes.array,
    categories: PropTypes.array
};


export default General