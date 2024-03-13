/* eslint-disable react/prop-types */
import { Form, useNavigation, useParams, redirect } from "react-router-dom"

import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleProductEdit = ({ product, method }) => {
    const editorRef = useRef(null);
    const { data } = product
    const { products, subCategories, categories } = data
    const allSubCategories = subCategories
    const allCategories = categories
    const allProducts = products

    const { id } = useParams()
    const currentProduct = allProducts.filter(product => product._id === id)
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting";

    const [tags, setTags] = useState("");

    const handleTagsChange = (event) => {
        setTags(event.target.value);
    };
    return (
        <div className='add-products'>
            <h1>Edit Product</h1>
            <Form method={method} className="form-control" id="edit-products-form" encType="multipart/form-data">
                <div className="input-container">
                    <label htmlFor="name">Product Name</label>
                    <input type="text" name="name" defaultValue={currentProduct ? currentProduct[0].name : ""} />
                </div>
                <div className="input-container">
                    <label htmlFor="description">Description</label>
                    <Editor
                        apiKey={`${import.meta.env.VITE_TINY_API_KEY}`}
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={currentProduct ? currentProduct[0].description : ""}
                        textareaName='description'
                        init={{
                            height: 400,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }} />
                </div>
                <div className="input-container">
                    <label htmlFor="category">Category</label>
                    <select name="category" defaultValue={currentProduct ? currentProduct[0].category : ""}>
                        <option value="">Select Category</option>
                        {allCategories?.map(category => <option value={category._id} key={category._id}>{category.name}</option>)}
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="subCategory">SubCategory</label>
                    <select name="subCategory" defaultValue={currentProduct ? currentProduct[0].subCategory : ""} >
                        <option value="">Select SubCategory</option>
                        {allSubCategories?.map(subCategory => <option value={subCategory ? subCategory._id : null} key={subCategory._id}>{subCategory?.name}</option>)}
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="trending">Trending <span>(select true or false)</span></label>
                    <select name="trending" defaultValue={currentProduct[0].trending}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="tags">Tags (comma-separated)</label>
                    <input
                        type="text"
                        name="tags"
                        defaultValue={tags}
                        onChange={handleTagsChange}
                        placeholder={currentProduct[0].tags[0] === "" ? "No tags found" : undefined}
                    />

                </div>
                <div className="input-container">
                    <label htmlFor="image">Product image</label>
                    <input type="file" id="image" name="image" />
                </div>
                <button type="submit" className="add-btn" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Edit Product"}</button>
                <ToastContainer />
            </Form>
        </div>
    )
}

export default SingleProductEdit

export const action = async ({ request, params }) => {
    const method = request.method;
    const data = await request.formData();
    const tags = data.get("tags");
    const tagArray = tags.split(",").map(tag => tag.trim());
    const subCategoryValue = data.get('subCategory')

    const productData = new FormData();
    productData.append('name', data.get("name"));
    productData.append('description', data.get("description"));
    productData.append('category', data.get("category"));
    productData.append('trending', data.get("trending"));
    productData.append('image', data.get("image"));
    productData.append('subCategory', subCategoryValue);
    for (const tag of tagArray) {
        productData.append('tags', tag);
    }

    console.log(data.get("trending"))

    const productId = params.id
    // let url = `${import.meta.env.VITE_API_URL}products/${productId}`;
    let url = `http://127.0.0.1:3000/api/v1/products/${productId}`;

    try {
        const response = await fetch(url, {
            method: method,
            body: productData
        });

        if (!response.ok) {
            return toast.error("Something went wrong");
        } else {
            toast.success("Product Successfully Updated");
        }

        return redirect("/admin/edit");
    } catch (error) {
        return toast.error("error");
    }
}