import { json, useRouteLoaderData } from "react-router-dom"

import Products from "../Components/Products/Products"
import EnquireProvider from "../store/EnquireContextProvider"

const ProductsPage = () => {
    const { data } = useRouteLoaderData("root")
    const { categories, subCategories, products } = data



    return (
        <EnquireProvider>
            <Products categories={categories} products={products} subCategories={subCategories} />
        </EnquireProvider >
    )
}



export default ProductsPage

export const loader = async () => {
    const data = await fetch(`${import.meta.env.VITE_API_URL}products`)
    // const data = await fetch("https://awful-erin-bandanna.cyclic.app/api/v1/products")
    if (!data.ok) {
        throw json({ message: "Something happened! reload the page or go back to the homepage" }, { status: 500 })
    } else {
        const res = await data.json()
        const newRes = res.data.data
        return { data: newRes }
    }

}