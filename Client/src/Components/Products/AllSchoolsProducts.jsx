import { NavLink, useRouteLoaderData } from "react-router-dom"

import ReactPaginate from 'react-paginate';
import { useSearch } from "../../Hooks/UseSearch";

import { BsArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react";

import "./AllSubCategoryProducts.scss"
import SearchAndFilter from "../Common/SearchAndFilter";
import WishlistIcon from "../Common/WishlistIcon";

const ITEMS_PER_PAGE = 8

const AllSchoolsProducts = () => {
    const { data } = useRouteLoaderData("root")
    const { products, subCategories, categories } = data

    const allSubCategories = subCategories
    const allCategories = categories
    const allProducts = products

    const categoryMap = {}
    const subCategoryMap = {}
    allSubCategories.map(subCategory => {
        subCategoryMap[subCategory._id] = subCategory.slug
    })

    allCategories.forEach(category => {
        categoryMap[category._id] = category.slug
    })

    const [currentPage, setCurrentPage] = useState(0); // Use array destructuring
    const offset = currentPage * ITEMS_PER_PAGE;

    const { searchText, handleSearch } = useSearch("");

    // const filteredProducts = allProducts.filter(product => product.tags.includes(`${"schools" || "school"}`))
    const filteredProducts = allProducts.filter(product => {
        return product.tags.includes("schools") || product.tags.includes("school");
    });
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const SearchedFilteredProduct = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const paginatedProducts = SearchedFilteredProduct.slice(offset, offset + ITEMS_PER_PAGE);
    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    console.log(paginatedProducts.length === 0)
    return (
        <div className="all-product-section">
            <SearchAndFilter onSearch={handleSearch} numberOfProducts={paginatedProducts.length} />
            <div className="product-wrapper">
                {paginatedProducts.length === 0 ? (
                    <p className="nothing-found">No product found in this category</p>
                ) : (
                    paginatedProducts.map(obj => {
                        const categoryName = categoryMap[obj.category] || "unKnown Category";
                        const subCategoryName = subCategoryMap[obj.subCategory] || "unKnown Category";
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
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="product-image">
                                            <img src={obj.productImage} alt="microscope" crossOrigin='anonymous' />
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

export default AllSchoolsProducts