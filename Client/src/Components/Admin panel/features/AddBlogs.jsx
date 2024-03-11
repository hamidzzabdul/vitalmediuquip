import { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import "./AddBlogs.scss"
import { toast } from 'react-toastify';
import axios from 'axios';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const AddBlogs = () => {
    const [editorValue, setEditorValue] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const name = e.target.name.value;
        const description = e.target.description.value;
        const coverImage = e.target.coverImage.files[0];
        if (!title || !coverImage) {
            toast.error('Please fill in all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('name', name);
        formData.append('coverImage', coverImage);
        formData.append('content', editorValue);
        formData.append('description', description);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}`, formData);

            // const response = await axios.post('http://127.0.0.1:3000/api/v1/blogs/create-blog', formData);

            if (response.status === 200) {
                toast.success('Blog created successfully!');
            } else {
                toast.error('Failed to create blog. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error.message);
            toast.error('Error submitting form. Please try again.');
        }
    }


    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' className='blog-form'>
            <h2>Add Blog</h2>
            <div className="input-container">
                <label>Title</label>
                <input type="text" placeholder='enter title' name='title' />
            </div>
            <div className="input-container">
                <label>Cover Image URL</label>
                <input type="file" name='coverImage' />
            </div>

            <div className='input-container'>
                <label htmlFor="post-description">Description</label>
                <input type="text" name="description" placeholder='enter description' />
            </div>
            <div className='input-container'>
                <label >Blog Name</label>
                <input type="text" name="name" placeholder='enter blog name' />
            </div>

            <div className="inputs-container">
                <label>Content</label>
                {/* <ReactQuill
                    value={editorValue}
                    onChange={(value) => setEditorValue(value)}
                    modules={{
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ['bold', 'italic', 'underline', 'blockquote'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            ['image', 'code-block', 'color']
                        ]
                    }}
                    formats={[
                        'header',
                        'bold', 'italic', 'underline', 'blockquote',
                        'list', 'bullet',
                        'image', 'code-block',
                        'color' // Add 'color' format
                    ]}
                    theme="snow"
                /> */}
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
                    onChange={(value) => setEditorValue(value)}
                    height='50vh'
                />
            </div>
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
    );
}

export default AddBlogs;
