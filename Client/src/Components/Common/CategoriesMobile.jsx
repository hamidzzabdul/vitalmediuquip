/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'
import Modal from '../UI/Modal'
import { BiSolidChevronRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import "./CategoriesMobile.scss"

const CategoriesMobile = ({ onClose, categories, subCategories }) => {


    const filteredCategory = categories.filter(category => {
        return subCategories.some(subCategory => subCategory.category === category._id)
    })
    const filteredCategoryWithNoProducts = categories.filter(category => {
        return !subCategories.some(subCategory => subCategory.category === category._id)
    })
    return (
        <div>
            <Modal onClose={onClose}>
                <div className='categories-wrapper'>
                    <div className="close-categories">
                        <h3>Select Categories</h3>
                        <AiOutlineClose className='close-icon' onClick={onClose} />
                    </div>
                    <ul className="main-categories">
                        <h4>Categories</h4>
                        {filteredCategory.map(obj => {
                            return <NavLink key={obj._id} to={
                                `/allProducts/${obj.slug}`} onClick={onClose} end>
                                <li><BiSolidChevronRight /> {obj.name}</li>
                            </NavLink>
                        })}
                        {filteredCategoryWithNoProducts.map(obj => {
                            return <NavLink key={obj._id} to={`/allProducts/${obj.slug}/all`} onClick={onClose} end>
                                <li><BiSolidChevronRight /> {obj.name}</li>
                            </NavLink>
                        })}
                    </ul>
                    <ul className="industry-categories">
                        <h3>Industry</h3>
                        <NavLink to={`/allProducts/Hospitality`} onClick={onClose} end>
                            <li><BiSolidChevronRight /> Hospitality</li>
                        </NavLink>
                        <NavLink to={`/allProducts/schools&universities`} onClick={onClose} end>
                            <li><BiSolidChevronRight /> Schools & university</li>
                        </NavLink>
                    </ul>
                    <NavLink onClick={onClose} to="/allProducts/services-&-maitenance"><BiSolidChevronRight /> Services and Maintenance</NavLink>
                </div>
            </Modal>
        </div>
    )
}

export default CategoriesMobile