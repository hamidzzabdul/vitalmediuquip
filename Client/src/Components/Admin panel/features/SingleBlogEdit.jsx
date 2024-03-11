/* eslint-disable react/prop-types */
import { useState } from 'react';
import "./AddBlogs.scss"
import { toast } from 'react-toastify';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

const SingleBlogEdit = ({ blog }) => {
    const { data } = blog
    const { id } = useParams()
    const currentBlog = data.filter(blog => blog._id === id)
    const [editorValue, setEditorValue] = useState(currentBlog[0].content || "");

    const handleEditorChange = (value) => {
        setEditorValue(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.description.value;
        const coverImage = e.target.coverImage.files[0];

        if (!title || !editorValue) {
            toast.error("Please fill in all fields.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", editorValue);
        formData.append("description", description);

        if (coverImage) {
            formData.append("coverImage", coverImage);
        }

        try {
            const response = await axios.patch(
                `${import.meta.env.VITE_API_URL}blogs/${id}`,
                formData
            );
            console.log(response);

            if (response.status === 200) {
                toast.success("Blog updated successfully!");
            } else {
                toast.error("Failed to update blog. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error.message);
            toast.error("Error submitting form. Please try again.");
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            method="PATCH"
            encType="multipart/form-data"
            className="blog-form"
        >
            <h2>Add Blog</h2>
            <div className="input-container">
                <label>Title</label>
                <input type="text" placeholder="enter title" name="title" defaultValue={currentBlog[0].title} />
            </div>
            <div className="input-container">
                <label>Cover Image URL</label>
                <input type="file" name="coverImage" />
            </div>

            <div className="input-container">
                <label htmlFor="post-description">Description</label>
                <input type="text" name="description" placeholder="enter description" defaultValue={currentBlog[0].description} />
            </div>

            <div className="inputs-container">
                <label>Content</label>
                <ReactQuill
                    value={editorValue}
                    onChange={handleEditorChange}
                    placeholder="Enter content"
                    modules={{
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['link', 'image', 'video'],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            ['clean']
                        ],
                    }}
                />
            </div>
            <button type="submit" className="submit-btn">
                Submit
            </button>
        </form>
    );
};

export default SingleBlogEdit;
