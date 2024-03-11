
const SaveWishlistToLocalStorage = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

export { SaveWishlistToLocalStorage };
