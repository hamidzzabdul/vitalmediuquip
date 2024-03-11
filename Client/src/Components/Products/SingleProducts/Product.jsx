/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Sub1 from "../../../assets/categories/subcategories/equipments.jpg"

import "../AllSubcategories.scss"

const Product = ({ name, categoryName, subCategoryName }) => {
    return (

        <div className='products-container' >
            <NavLink to={{
                pathname: `/allProducts/${categoryName}/${subCategoryName}/${name}`,
            }}>
                <img src={Sub1} alt="microscope" />
                <div className="product-details">
                    <p className="category">{categoryName}</p>
                    <p className="sub-category">{name}</p>
                    <button className="view-product">View product</button>
                </div>
            </NavLink>
        </div>
    )
}

export default Product