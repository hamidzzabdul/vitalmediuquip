import { Form, redirect, useNavigation } from "react-router-dom"
import "./AddProducts.scss"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategories = () => {

    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting";
    return (
        <div className='add-products'>
            <h1>Add categories</h1>
            <Form method="POST" className="form-control" id="add-products-form">
                <div className="input-container">
                    <label htmlFor="name">Category name</label>
                    <input type="text" name="name" required />
                </div>
                <button className="add-btn" disabled={isSubmitting}>{isSubmitting ? "Adding..." : "Add Product"}</button>
                <ToastContainer />
            </Form>
        </div>
    )
}

export default AddCategories

export const action = async ({ request }) => {
    const method = request.method
    const data = await request.formData();
    const categoryData = {
        name: data.get("name"),
    }

    let url = `${import.meta.env.VITE_API_URL}products/category/create-category`
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData)
    })

    if (!response.ok) {
        toast.error("Failed, Something bad happened try again")
    } else {
        toast.success("Product added Successfully")
    }
    return redirect("/admin/add-categories");
}