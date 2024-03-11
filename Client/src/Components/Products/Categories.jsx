/* eslint-disable react/prop-types */
import { BiSolidChevronRight } from "react-icons/bi"

import "./Categories.scss"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

const Categories = ({ categories, subCategories }) => {
    const [activeCategory, setActiveCategory] = useState("")

    const allSubCategories = subCategories
    const allCategories = categories


    useEffect(() => {
        setActiveCategory("All Products")
    }, [setActiveCategory])


    const handleOnClick = (category) => {
        setActiveCategory(category)
    }

    const filteredCategory = categories.filter(category => {
        return allSubCategories.some(subCategory => subCategory.category === category._id)
    })
    const filteredCategoryWithNoProducts = allCategories.filter(category => {
        return !category.name.toLowerCase().includes("dirui") && !allSubCategories.some(subCategory => subCategory.category === category._id)
    })

    console.log(filteredCategory)

    return (
        <div className="categories-container">
            <div className='categories-wrapper'>
                <ul className="main-categories">
                    <h3>General Categories</h3>
                    <NavLink to="/allProducts" end>
                        <li><BiSolidChevronRight /> All Products</li>
                    </NavLink>
                    <NavLink to="/allProducts/dirui/all" end>
                        <li><BiSolidChevronRight /> Dirui</li>
                    </NavLink>
                    {filteredCategory.map(obj => {

                        return <NavLink key={obj._id} to={
                            `/allProducts/${obj.slug}`
                        } className={activeCategory === obj.slug ? "active" : undefined} onClick={() => handleOnClick(obj.name)} end>
                            <li><BiSolidChevronRight /> {obj.name}</li>
                        </NavLink>
                    })}
                    {filteredCategoryWithNoProducts.map(obj => {
                        return <NavLink key={obj._id} to={`/allProducts/${obj.slug}/all`} className={activeCategory === obj.slug ? "active" : undefined} onClick={() => handleOnClick(obj.name)} end>
                            <li><BiSolidChevronRight /> {obj.name}</li>
                        </NavLink>
                    })}

                </ul>
                <ul className="industry-categories">
                    <h3>Industry</h3>
                    <NavLink to={`/allProducts/Hospitality`} end>
                        <li><BiSolidChevronRight /> Hospitality</li>
                    </NavLink>
                    <NavLink to={`/allProducts/schools&universities`} end>
                        <li><BiSolidChevronRight /> Schools & university</li>
                    </NavLink>
                </ul>
                <NavLink className={`services ${activeCategory === "services-&-maintenance" ? "active" : ""}`} to="/allproducts/services-&-maitenance" end onClick={() => handleOnClick("services-&-maintenance")}><BiSolidChevronRight /> Services and Maintenance</NavLink>
            </div>
        </div >
    )
}
export default Categories