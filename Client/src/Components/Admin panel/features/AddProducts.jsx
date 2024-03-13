import { useRef, useState } from 'react';

import { Form, redirect, useNavigation, useRouteLoaderData } from "react-router-dom"
import "./AddProducts.scss"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const AddProducts = () => {
    const editor = useRef();
    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor;
    };

    const { data } = useRouteLoaderData("product-loader")
    const { subCategories, categories } = data
    const allSubCategories = subCategories
    const allCategories = categories


    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting";


    // State to manage the tags input
    const [tags, setTags] = useState("");

    // Function to update tags state
    const handleTagsChange = (event) => {
        setTags(event.target.value);
    };
    return (
        <div className='add-products'>
            <h1>Add Products</h1>
            <Form method="POST" className="form-control" id="add-products-form" encType="multipart/form-data">
                <div className="input-container">
                    <label htmlFor="name">Product Name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="input-container">
                    <label htmlFor="description">Description</label>
                    <SunEditor
                        setOptions={{
                            buttonList: [
                                ['undo', 'redo'],
                                ['font', 'fontSize', 'formatBlock'],
                                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                ['removeFormat'],
                                ['outdent', 'indent'],
                                ['align', 'horizontalRule', 'list', 'lineHeight'],
                                ['table', 'link'],
                                ['fullScreen', 'showBlocks', 'codeView'],
                                ['preview', 'print'],
                                ['fontColor', 'hiliteColor'],
                            ],
                        }}
                        getSunEditorInstance={getSunEditorInstance}
                        name='editor'
                        height='50vh'
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="">Select Category</option>
                        {allCategories?.map(category => <option value={category._id} key={category._id}>{category.name}</option>)}
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="subCategory">SubCategory</label>
                    <select name="subCategory" >
                        <option value="">Select SubCategory</option>
                        {allSubCategories?.map(subCategory => <option value={subCategory ? subCategory._id : null} key={subCategory._id}>{subCategory?.name}</option>)}
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="trending">Trending <span>(select true or false)</span></label>
                    <select name="trending">
                        <option value="false" >False</option>
                        <option value="true">True</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="tags">Tags (comma-separated)</label>
                    <input
                        type="text"
                        name="tags"
                        value={tags}
                        onChange={handleTagsChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="image">Product image</label>
                    <input type="file" id="image" name="image" />
                </div>
                <button className="add-btn" disabled={isSubmitting}>{isSubmitting ? "Adding..." : "Add Product"}</button>
                <ToastContainer />
            </Form>
        </div>
    )
}
export default AddProducts

export const action = async ({ request }) => {
    const method = request.method;
    const data = await request.formData();
    const tags = data.get("tags");
    const tagArray = tags.split(",").map(tag => tag.trim());

    const subCategoryValue = data.get('subCategory')

    const productData = new FormData();
    productData.append('name', data.get("name"));
    productData.append('description', data.get("editor"));
    productData.append('category', data.get("category"));
    productData.append('trending', data.get("trending"));
    productData.append('image', data.get("image"));
    productData.append('subCategory', subCategoryValue);

    for (const tag of tagArray) {
        productData.append('tags', tag);
    }

    let url = `${import.meta.env.VITE_API_URL}products/create-products`;
    // let url = "http://127.0.0.1:3000/api/v1/products/create-products";
    const response = await fetch(url, {
        method: method,
        body: productData
    });

    if (!response.ok) {
        toast.error("Failed, Something bad happened try again");
    } else {
        toast.success("Product added Successfully");
    }

    return redirect("/admin");
};

