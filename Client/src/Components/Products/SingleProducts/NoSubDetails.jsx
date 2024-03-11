import { useParams, useRouteLoaderData } from "react-router-dom";
import { useContext } from "react"

import EnquireContext from "../../../store/EnquireContext";

import "./ProductDetails.scss"
import Button from "../../UI/Button"

import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import parse from 'html-react-parser';

import RelatedProducts from "../Related Products/RelatedProduct"


const NoSubDetails = () => {
    const { selectProduct } = useContext(EnquireContext);

    const { data } = useRouteLoaderData("root")
    const { products, categories } = data
    const allCategories = categories

    const { category, name } = useParams()
    const selectedCategory = allCategories.find(cat => cat.slug === category)

    const currentProduct = products.find(product => product.slug === name);

    const product = products.filter(product => product.category === selectedCategory._id)
    const relatedProducts = product

    if (!product) {
        return <p>No product found with that adress</p>
    }

    const { name: productName, description, productImage } = currentProduct
    // const imageUrl = `https://awful-erin-bandanna.cyclic.app/${productImage}`;

    return (
        <>
            <div className="product-details">
                <div className="product">
                    <div className="product-image">
                        <img src={productImage} alt="product" />
                    </div>
                    <div className="product-description">
                        <h3 className="product-name">{productName}</h3>
                        <div className="des">
                            <label>
                                <p>Category: <span className="category-name">{category}</span></p>
                            </label>
                            <div className="specs">
                                <span className="des-header">Description</span>
                                <p className="description">{parse(description)}</p>
                            </div>
                        </div>
                        <Button label="Enquire about this product" className="enquire-btn" onClick={() => selectProduct(currentProduct)} />
                        <div className="share-socials">
                            <p>Follow:</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/VitalMediquip/" target="_blank" rel="noreferrer">
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
            {
                relatedProducts.length > 1 && <RelatedProducts products={relatedProducts} categories={allCategories} id={currentProduct._id} />
            }
        </>
    )
}

export default NoSubDetails