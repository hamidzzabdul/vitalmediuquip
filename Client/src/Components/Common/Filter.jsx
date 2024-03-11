
import { BsSliders } from "react-icons/bs"
import EnquireContext from "../../store/EnquireContext";
import { useContext } from "react";


const Filter = () => {

    const { openCategoriesModal } = useContext(EnquireContext);
    return (
        <>
            <div className="filters" onClick={openCategoriesModal}>
                <BsSliders className="icons" />
                <p> Categories</p>
            </div>
        </>
    )
}

export default Filter