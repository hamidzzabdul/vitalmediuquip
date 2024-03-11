import "./AllsubCategories.scss"
import Sub1 from "../../assets/categories/subcategories/equipments.jpg"
import { NavLink, useParams, useRouteLoaderData } from "react-router-dom";

import Funiture from "../../assets/categories/subcategories/Furniture.png"
import Hospital from "../../assets/categories/subcategories/Hospital.png"
import Detergents from "../../assets/categories/subcategories/Detergents.png"
import LabEquipments from "../../assets/categories/subcategories/LabEquipment.png"
import Linen from "../../assets/categories/subcategories/LinenProtective.png"
import LabConsumables from "../../assets/categories/subcategories/LabConsumables.png"
import RapidDiagnostic from "../../assets/categories/subcategories/Rapiddiagnostic.png"
import Reagents from "../../assets/categories/subcategories/Reagents.png"
import SensitivityDrugsMicrobiology from "../../assets/categories/subcategories/SensitivityDrugsMicrobiology.png"
import SurgicalItems from "../../assets/categories/subcategories/Surgicaltems.png"
import WasteManagement from "../../assets/categories/subcategories/WasteManagement.png"

const subCategoyImages = {
    "funiture": Funiture,
    "equipment & instruments": Hospital,
    "linen & personal protective items": Linen,
    "waste management ": WasteManagement,
    "detergents, disinfectant, & spirits": Detergents,
    "surgical products": SurgicalItems,
    "rapid diagnostic tests & serolgy": RapidDiagnostic,
    "reagents": Reagents,
    "microbiology": SensitivityDrugsMicrobiology,
    "lab consumables": LabConsumables,
    "lab equipments and machines": LabEquipments
}


const AllSubcategories = () => {
    const { data } = useRouteLoaderData("root")
    const { subCategories, categories, products } = data
    const allSubCategories = subCategories
    const allCategories = categories
    const allProducts = products
    const { category } = useParams()

    const selectedCategory = allCategories.find(cat => cat.slug === category)

    if (!selectedCategory) {
        return
    }
    const filteredSubCategories = allSubCategories.filter(subcategory => subcategory.category === selectedCategory._id)

    return (
        <div className="product-section">
            {filteredSubCategories.length > 0 ? (
                filteredSubCategories.map(obj => {
                    const productsForSubcategory = allProducts.filter(product => {
                        return product.subCategory === obj._id
                    });
                    const subcategoryImage = subCategoyImages[obj.name] || Sub1;

                    return (
                        <NavLink key={obj._id} to={`/allProducts/${selectedCategory.slug}/${obj.slug}`}>
                            <div className='products-container'>
                                <div className="product-image">
                                    <img src={subcategoryImage} alt="microscope" />
                                </div>
                                <div className="product-details">
                                    <p className="category">{selectedCategory.name}</p>
                                    <p className="sub-category">{obj.name}<br /> <span>({productsForSubcategory.length})</span></p>
                                </div>
                            </div>
                        </NavLink>
                    );
                })
            ) : (
                <div className="product-container">
                    <h3 className="fall-back-header">Sorry for the inconvenience😥 </h3>
                    <p className="fall-back">No Products in this subcategory</p>
                </div>
            )}
        </div>

    );
}

export default AllSubcategories;

