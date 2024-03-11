import { createSlice } from "@reduxjs/toolkit"
import { SaveWishlistToLocalStorage } from "./wishlist-actions"

const loadWishlistFromLocalStorage = () => {
    const storeWishlist = localStorage.getItem("wishlist")
    return storeWishlist ? JSON.parse(storeWishlist) : null
}


const initialState = loadWishlistFromLocalStorage() || {
    items: [],
    totalQuantity: 0,
    changed: false
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        replaceWishlist(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
            SaveWishlistToLocalStorage(state)
        },
        addItemToWishlist(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    category: newItem.category,
                    totalPrice: newItem.price,
                    quantity: 1
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            SaveWishlistToLocalStorage(state)
        },
        deleteItemFromWishlist(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

            SaveWishlistToLocalStorage(state)
        },
        clearWishlist(state) {
            state.items = []
        }
    }
})

export const wishlistActions = wishlistSlice
export default wishlistSlice