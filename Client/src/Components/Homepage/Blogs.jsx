/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./Blogs.scss"
import BlogContainer from "./product/BlogContainer"
const Blogs = ({ blogs }) => {
    const firstThreeBlogs = blogs.slice(0, 3);

    return (
        <div className='blogs-container'>
            <div className="category-header">
                <h2 className="title">The Latest Blogs</h2>
                <div className="line" />
            </div>
            <div className="view-all">
                <NavLink to="/blogs">
                    View All Post
                </NavLink>
            </div>
            <div className="blog-wrapper">
                {firstThreeBlogs.map(blog => (
                    <div key={blog._id}>
                        <BlogContainer blog={blog} key={blog.Id} />
                    </div>
                ))}
            </div>
        </div>
    )
}



export default Blogs