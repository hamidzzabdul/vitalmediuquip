/* eslint-disable react/prop-types */
import "./RelatedProducts.scss"


import { NavLink, useParams } from "react-router-dom";

const RelatedProduct = ({ products, categories, subCategories }) => {
    const { category, name, subCategory } = useParams()
    let allCategories;
    let allSubCategories;

    if (!subCategory) {
        allCategories = categories
        allSubCategories = subCategories
    } else {
        allCategories = categories
        allSubCategories = subCategories
    }

    const categoryMap = {}
    const subCategoryMap = {}
    const categorySlugs = {}
    const subCategorySlugs = {}

    allCategories.forEach(category => {
        categoryMap[category._id] = category.name
    })

    allCategories.forEach(category => {
        categorySlugs[category._id] = category.slug
    })

    allSubCategories?.forEach(subCategory => {
        subCategoryMap[subCategory._id] = subCategory.name
    })
    allSubCategories?.forEach(subCategory => {
        subCategorySlugs[subCategory._id] = subCategory.slug
    })

    const categoryName = category.split("-").join(" ")
    const filteredProduct = products.filter(product => product.slug !== name)
    const relatedProduct = filteredProduct.slice(0, 4)
    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <div></div>
            <div className="related-container">
                <div className="col"></div>
                <div className="col">
                    <h2>Related Products</h2>
                    <div className="related-wrapper">
                        {
                            relatedProduct.map(obj => {
                                const subCategoryName = subCategoryMap[obj.subCategory] || "unKnown Category"

                                // const imageUrl = `https://awful-erin-bandanna.cyclic.app/${obj.productImage}`;
                                return <NavLink key={obj._id}
                                    to={subCategoryName === "unKnown Category" ?
                                        `/allProducts/${categorySlugs[obj.category]}/all/${obj.slug}`
                                        :
                                        `/allProducts/${categorySlugs[obj.category]}/${subCategorySlugs[obj.subCategory]}/${obj.slug}`}
                                    onClick={handleOnscroll}>
                                    <div className='related-product'>
                                        <div className="product-image">
                                            <img src={obj.productImage} alt="product image" />
                                        </div>
                                        <div className="related-details">
                                            <p className="category">{categoryName}</p>
                                            <p className="sub-category">{obj.name}</p>
                                            <button className="view-product">View product</button>
                                        </div>
                                    </div>
                                </NavLink>
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedProduct
