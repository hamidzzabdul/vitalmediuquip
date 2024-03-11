/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import { useContext } from "react"

import EnquireContext from "../../store/EnquireContext"

import "./Products.scss"

import Categories from "./Categories"
import NavRoutes from "./NavRoutes"
import EnquireForm from "../Common/EnquireForm"
import CategoriesMobile from "../Common/CategoriesMobile"


const Products = ({ categories, subCategories }) => {
    const allCategories = categories
    const allSubCategories = subCategories

    const { showEnquire, openEnquireModal, closeModal, openCategoriesModal, showCategories } = useContext(EnquireContext);


    return (
        <>
            {showEnquire && <EnquireForm onEnquire={openEnquireModal} onClose={closeModal} />}
            {showCategories && <CategoriesMobile categories={allCategories} subCategories={allSubCategories} onOpen={openCategoriesModal} onClose={closeModal} />}
            <div className="hero-banner">
                <h1>Our Products</h1>
                <NavRoutes />
            </div>
            <div className="products">
                <div className="products-section">
                    <Categories categories={allCategories} subCategories={allSubCategories} />
                    <div className="left-product-section" >
                        <Outlet />
                    </div>
                </div>
            </div>
        </>

    )
}
export default Products
