/* eslint-disable react/prop-types */
import useWishlist from "../../Hooks/useWishList";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const WishlistIcon = ({ product, categoryName, allProducts }) => {
    const { favouriteStatus, handleWishlistAddorRemove } = useWishlist();
    return (

        <div className="icons-container">

            <div className={`wishlist-icon ${favouriteStatus[product._id] ? "active" : ""}`} onClick={() => handleWishlistAddorRemove(product._id, categoryName, allProducts)}>
                {!favouriteStatus[product._id] ? (<FaRegHeart className="icon" />) : (<FaHeart className="icon active" />)}
            </div>
        </div>
    )
}

export default WishlistIcon