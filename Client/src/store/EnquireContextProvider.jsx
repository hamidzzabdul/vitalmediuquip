/* eslint-disable react/prop-types */
import { useState } from "react";
import EnquireContext from "./EnquireContext";

export const EnquireProvider = ({ children }) => {
    const [showEnquire, setShowEnquire] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openEnquireModal = () => {
        setShowEnquire(true); // Open the enquire modal
    };
    const openCategoriesModal = () => {
        setShowCategories(true)
    };

    const closeModal = () => {
        setShowEnquire(false);
        setShowCategories(false);
    };
    const selectProduct = (product) => {
        setSelectedProduct(product);
        openEnquireModal();
    };

    const contextValue = {
        showEnquire,
        showCategories,
        openEnquireModal,
        openCategoriesModal,
        closeModal,
        selectedProduct,
        selectProduct,
    };

    return (
        <EnquireContext.Provider value={contextValue}>
            {children}
        </EnquireContext.Provider>
    );
};

export default EnquireProvider