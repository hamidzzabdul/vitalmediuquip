export const updateFavoriteStatus = (wishlist, setFavouriteStatus, dispatch, productId, category, products, wishlistActions) => {
    const updatedfavouriteStatus = wishlist.reduce((status, item) => {
        status[item.id] = true;
        return status;
    }, {});
    setFavouriteStatus(updatedfavouriteStatus);

    if (!updatedfavouriteStatus[productId]) {
        dispatch(wishlistActions.addItemToWishlist({
            id: productId,
            title: products.find(product => product._id === productId).name,
            image: products.find(product => product._id === productId).productImage,
            category,
        }));
    } else {
        dispatch(wishlistActions.deleteItemFromWishlist(productId));
    }
};