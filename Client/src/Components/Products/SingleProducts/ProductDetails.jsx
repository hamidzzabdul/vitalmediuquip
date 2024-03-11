import EnquireContext from "../../../store/EnquireContext"

import Button from "../../UI/Button"
import "./ProductDetails.scss"

import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

import RelatedProducts from "../Related Products/RelatedProduct"
import { useParams, useRouteLoaderData } from "react-router-dom";
import { useContext } from "react"
import parse from 'html-react-parser';
import WishlistIcon from "../../Common/WishlistIcon"

const ProductDetails = () => {
    const { selectProduct } = useContext(EnquireContext);

    const { data } = useRouteLoaderData("root")
    const { products, subCategories, categories } = data
    const allproducts = products
    const allCategories = categories
    const allSubCategories = subCategories

    const { name, category, subCategory } = useParams()
    const product = allproducts.filter(product => product.slug === name)
    const selectedCategory = allCategories.find(cat => cat.slug === category)
    const CurrentSubCategory = allSubCategories.find(subcat => subcat.slug === subCategory)
    const currentProduct = allproducts.find(product => product.slug === name && product.category === selectedCategory._id);

    const relatedProducts = allproducts.filter(product => product.subCategory === CurrentSubCategory._id)
    if (!product) {
        return <p>No product found with that adress</p>
    }
    const { name: productName, description, productImage } = currentProduct
    const renderedDescription = parse(description)
    return (
        <>
            <div className="product-details">
                <div className="product">
                    <WishlistIcon product={currentProduct} allProducts={allproducts} categoryName={category} />
                    <div className="product-image">
                        <img src={productImage} alt="product" />
                    </div>
                    <div className="product-description">
                        <h1 className="product-name">{productName}</h1>
                        <div className="des">
                            <label>
                                <p>Category: <span className="category-name">{category}</span></p>
                            </label>
                            <div className="specs">
                                <h2 className="des-header">Description</h2>
                                <div className="description">{renderedDescription}</div>
                            </div>
                        </div>
                        <Button label="Enquire about this product" className="enquire-btn" onClick={() => selectProduct(currentProduct)} />
                        <div className="share-socials">
                            <p>Follow:</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/VitalMediquip/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="icons" />
                                </a>
                                <a href="https://www.instagram.com/vital_mediquip/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="icons" />
                                </a>
                                <a href="https://twitter.com/Vital_Mediquip" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="icons" />
                                </a>
                                <a href="https://www.linkedin.com/company/97941302/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {relatedProducts && <RelatedProducts products={relatedProducts} categories={categories} subCategories={subCategories} />}
        </>
    )
}

export default ProductDetails