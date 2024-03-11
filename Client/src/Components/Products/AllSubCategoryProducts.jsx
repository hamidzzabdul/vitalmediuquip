/* eslint-disable react/prop-types */
import { useState } from "react"
import { NavLink, useParams, useRouteLoaderData } from "react-router-dom"
import { useSearch } from "../../Hooks/UseSearch";


import ReactPaginate from 'react-paginate';
import { BsArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

import "./AllSubCategoryProducts.scss"
import SearchAndFilter from "../Common/SearchAndFilter";
import WishlistIcon from "../Common/WishlistIcon";

const ITEMS_PER_PAGE = 8

const AllSubCategoryProducts = () => {
    const { data } = useRouteLoaderData("root")
    const { products, subCategories, categories } = data
    const allSubCategories = subCategories
    const allCategories = categories
    const allProducts = products

    const { subCategory, category } = useParams()

    const selectedSubCategory = allSubCategories.find(subCat => subCat.slug === subCategory)
    const selectedCategory = allCategories.find(cat => cat.slug === category)

    const [currentPage, setCurrentPage] = useState(0); // Use array destructuring
    const { searchText, handleSearch } = useSearch("");

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };


    const offset = currentPage * ITEMS_PER_PAGE;

    const productsForSubcategory = allProducts.filter(product => {
        return product.subCategory === selectedSubCategory._id;
    });
    const paginatedProducts = productsForSubcategory.slice(offset, offset + ITEMS_PER_PAGE);
    const filteredProduct = products.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className="all-product-section">
            <SearchAndFilter onSearch={handleSearch} numberOfProducts={paginatedProducts.length} />
            <div className="product-wrapper">
                {searchText === "" ? (
                    // Display all paginated products
                    paginatedProducts.map(obj => (
                        <ProductLink
                            key={obj._id}
                            product={obj}
                            selectedCategory={selectedCategory}
                            selectedSubCategory={selectedSubCategory}
                            allProducts={allProducts}
                        />
                    ))
                ) : (
                    // Display filtered products based on the search text
                    filteredProduct.length > 0 ? (
                        filteredProduct.map(obj => (
                            <ProductLink
                                key={obj._id}
                                product={obj}
                                selectedCategory={selectedCategory}
                                selectedSubCategory={selectedSubCategory}
                                allProducts={allProducts}

                            />
                        ))
                    ) : (
                        <p className="nothing-found">No product with that name <br /> try <a href="/contact-us">contacting</a> us for more info</p>
                    )
                )}
            </div>

            {productsForSubcategory.length > ITEMS_PER_PAGE && (
                <div className="paginate">
                    <ReactPaginate
                        previousLabel={<BsArrowLeftCircleFill />}
                        nextLabel={<BsFillArrowRightCircleFill />}
                        pageCount={Math.ceil(productsForSubcategory.length / ITEMS_PER_PAGE)}
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

function ProductLink({ product, selectedCategory, selectedSubCategory, allProducts }) {
    return (
        <div className='products-container'>
            <WishlistIcon product={product} allProducts={allProducts} categoryName={selectedCategory.name} />

            <NavLink
                to={`/allProducts/${selectedCategory.slug}/${selectedSubCategory.slug}/${product.slug}`}
            >
                <div className="product-image">
                    <img src={product.productImage} alt="microscope" crossOrigin='anonymous' />
                </div>
                <div className="product-details">
                    <p className="category">{selectedCategory.name}</p>
                    <p className="sub-category">{product.name}</p>
                </div>
            </NavLink>
        </div>
    );
}

export default AllSubCategoryProducts