/* eslint-disable react/prop-types */
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { wishlistActions } from "../../store/wishlist-slice";

import { GrFormClose } from "react-icons/gr"
import { FaRegTrashCan } from "react-icons/fa6";

import "./Wishlist.scss"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Backdrop = ({ onClose }) => {
    return <div className="backdrop-wish" onClick={onClose}>
    </div>;
};

const portalElement = document.getElementById("overlays");

const Wishlist = ({ className, onClose }) => {
    const containerClasses = `wishlist-container ${className === "active" ? "active" : "inactive"}`;
    const handleClose = () => {
        // Toggle the class when closing the sidebar
        onClose();
    };

    const dispatch = useDispatch()

    const deleteItemHandler = (id) => {
        dispatch(wishlistActions.actions.deleteItemFromWishlist(id))
    }
    const clearWishlist = () => {
        if (wishListItems.length > 0) {
            dispatch(wishlistActions.actions.clearWishlist())
            onClose()
        }

    }
    const wishListItems = useSelector((state) => state.wishlist.items)
    return (
        <Fragment>
            {className &&
                ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)
            }
            <div>


                <div className={containerClasses} >
                    <div className="wishlist-content">
                        <div className="wislist-header">
                            <h2>My Wishlist ({wishListItems.length})</h2>
                            <GrFormClose className="close-icon" onClick={handleClose} />
                        </div>

                        <div className="wishlist-products">
                            <ul>
                                {wishListItems.length === 0 && (<p className="fallback">There is nothing on your wishlist</p>)}
                                {wishListItems.map((item, index) => {
                                    return (< li key={item.id} >
                                        <span>{index + 1}.</span>
                                        <div className="product-image">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="product-details">
                                            <div className="details">
                                                <h3>{item.title}</h3>
                                                <div className="delete-icon">
                                                    <p>{item.category}</p>
                                                    <FaRegTrashCan className="icon" onClick={() => deleteItemHandler(item.id)} />
                                                </div>
                                            </div>
                                        </div>
                                    </li>)
                                })}
                            </ul>
                        </div>
                        <div className="wishlist-btn-container">
                            {wishListItems.length > 0 && <button className="wishlist-btn" onClick={clearWishlist}>Clear Wishlist</button>}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Wishlist