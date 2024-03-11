import { NavLink, useRouteLoaderData } from "react-router-dom"
import { useSearch } from "../../Hooks/UseSearch";

import ReactPaginate from 'react-paginate';

import { BsArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react";

import "./AllSubCategoryProducts.scss"
import SearchAndFilter from "../Common/SearchAndFilter";
import WishlistIcon from "../Common/WishlistIcon";



const ITEMS_PER_PAGE = 8

const AllHospitalProducts = () => {
    const { data } = useRouteLoaderData("root")
    const { products, subCategories, categories } = data

    const categoryMap = {}
    const subCategoryMap = {}
    subCategories.map(subCategory => {
        subCategoryMap[subCategory._id] = subCategory.name
    })

    categories.forEach(category => {
        categoryMap[category._id] = category.name
    })

    const [currentPage, setCurrentPage] = useState(0); // Use array destructuring
    const offset = currentPage * ITEMS_PER_PAGE;


    const filteredProducts = products.filter(product => product.tags.includes("horeca"))
    const { searchText, handleSearch } = useSearch("");
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };
    const paginatedProducts = filteredProducts.slice(offset, offset + ITEMS_PER_PAGE);

    const searchedProducts = paginatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // console.log(paginatedProducts)
    return (
        <div className="all-product-section">
            <SearchAndFilter onSearch={handleSearch} numberOfProducts={paginatedProducts.length} />

            <div className="product-wrapper">
                {searchedProducts.length === 0 ? (
                    filteredProducts.length === 0 ? <p className="nothing-found">No product found in this category</p>
                        :
                        <p className="nothing-found">No product with that name <br /> try <a href="/contact-us">contacting</a> us for more info</p>
                ) : (
                    paginatedProducts.map(obj => {
                        const categoryName = categoryMap[obj.category] || "unKnown Category";
                        const subCategoryName = subCategoryMap[obj.subCategory] || "unKnown Category";
                        // const imageUrl = `https://awful-erin-bandanna.cyclic.app/${obj.productImage}`;

                        return (
                            <>

                                <div className='products-container'>
                                    <WishlistIcon product={obj} allProducts={products} categoryName={categoryName} />
                                    <NavLink
                                        key={obj._id}
                                        to={
                                            subCategoryName === "unKnown Category"
                                                ? `/allProducts/${categoryName}/all/${obj.slug}`
                                                : `/allProducts/${categoryName}/${subCategoryName}/${obj.slug}`
                                        }>
                                        <div className="product-image">
                                            <img src={obj.productImage} alt="product" />
                                        </div>
                                        <div className="product-details">
                                            <p className="category">{categoryName}</p>
                                            <p className="sub-category">{obj.name}</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </>
                        );
                    })
                )}
            </div>


            {filteredProducts.length > ITEMS_PER_PAGE && (
                <div className="paginate">
                    <ReactPaginate
                        previousLabel={<BsArrowLeftCircleFill />}
                        nextLabel={<BsFillArrowRightCircleFill />}
                        pageCount={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        onClick={handleOnscroll}
                    />
                </div>
            )}
        </div>
    )
}

export default AllHospitalProducts