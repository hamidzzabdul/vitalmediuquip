import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wishlistActions } from "../store/wishlist-slice";

const useWishlist = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist.items);
    const [favouriteStatus, setFavouriteStatus] = useState({});

    useEffect(() => {
        const updatedFavouriteStatus = wishlist.reduce((status, item) => {
            status[item.id] = true;
            return status;
        }, {});
        setFavouriteStatus(updatedFavouriteStatus);
    }, [wishlist]);

    const handleWishlistAddorRemove = (productId, category, products) => {
        setFavouriteStatus(prevStatus => ({
            ...prevStatus,
            [productId]: !prevStatus[productId]
        }))

        if (!favouriteStatus[productId]) {
            dispatch(wishlistActions.actions.addItemToWishlist({
                id: productId,
                title: products.find(product => product._id === productId).name,
                image: products.find(product => product._id === productId).productImage,
                category
            }))
        } else {
            dispatch(wishlistActions.actions.deleteItemFromWishlist(productId))
        }
    }

    return { favouriteStatus, handleWishlistAddorRemove };
};

export default useWishlist;
