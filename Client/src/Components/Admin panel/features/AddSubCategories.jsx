// import { useState } from "react";
import { Form, redirect, useNavigation, useRouteLoaderData } from "react-router-dom"
import "./AddProducts.scss"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSubCategories = () => {
    const data = useRouteLoaderData("product-loader")
    const { categories } = data.data
    console.log(categories)

    const allCategories = categories

    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting";
    return (
        <div className='add-products'>
            <h1>Add Sub-Categories</h1>
            <Form method="POST" className="form-control" id="add-products-form">
                <div className="input-container">
                    <label htmlFor="name">Sub-Category name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="input-container">
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="">Select Category</option>
                        {allCategories.map(category => <option value={category._id} key={category._id}>{category.name}</option>)}
                    </select>
                </div>
                <button className="add-btn" disabled={isSubmitting}>{isSubmitting ? "Adding..." : "Add Product"}</button>
                <ToastContainer />
            </Form>
        </div>
    )
}

export default AddSubCategories

export const action = async ({ request }) => {
    const method = request.method;
    const data = await request.formData();

    const productData = {
        name: data.get("name"),
        category: data.get("category"),
    }

    let url = `${import.meta.env.VITE_API_URL}products/subCategory/create-sub-category`
    // let url = "http://127.0.0.1:3000/api/v1/products/subCategory/create-sub-category"
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData)
    })
    if (!response.ok) {
        toast.error("Failed, Something went wrong! try again")
    } else {
        toast.success("Product added Successfully")
    }

    return redirect("/admin/add-sub-categories");
}
