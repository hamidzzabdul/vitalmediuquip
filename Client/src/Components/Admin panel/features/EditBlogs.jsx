import { NavLink, useLoaderData } from "react-router-dom"
import "./EditsBlogs.scss"
import { truncateText } from "../../../../utils/truncate"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { imgUrl } from "../../../../utils/imgUrl"
const EditBlogs = () => {
    const { data: blogs } = useLoaderData()

    const handleDelete = (id) => {
        // axios.delete("http://127.0.0.1:3000/api/v1/blogs/" + id).then(() => {
        axios.delete(`${import.meta.env.VITE_API_URL}blogs/` + id).then(() => {
            toast.success("blog deleted succesfully")
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }).catch(() => {
            toast.error("Something went wrong")
        })
    }
    return (
        <div>
            <ToastContainer />
            <h1>
                EditBlogs
            </h1>

            {blogs.map(blog => (
                <div className="blogs" key={blog._id}>
                    <div className="content">
                        <div className="img-container">
                            <img src={`${imgUrl}/${blog.coverImage}`} alt="" />
                        </div>
                        <div className="blog-content">
                            <h2 className="title">{blog.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: truncateText(blog.content, 150) }} />

                        </div>
                    </div>

                    <div className="actions">
                        <NavLink to={`/admin/edit-blogs/${blog._id}`} state={{ blog }}>
                            <button className="edit-btn">Edit</button>
                        </NavLink>
                        <button className="delete-btn" onClick={() => handleDelete(blog._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EditBlogs