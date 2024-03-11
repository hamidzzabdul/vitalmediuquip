import { useRouteLoaderData } from "react-router-dom";
import BlogItem from "../Common/BlogItem";
import "./Blog.scss"


const BlogPosts = () => {
    const { data: blogs } = useRouteLoaderData("blogs");




    return (
        <>
            <div className="blog-hero">
                <h1>Welcome to Our Blogs</h1>
                <p>This is our blogs oage </p>
            </div>
            <div className="blog-container">
                <div className="blog-list">
                    <div className="header">
                        <h3>Latest articles</h3>
                        <div className="line" />
                    </div>
                    <div className="blog-wrapper">
                        {blogs.map(blog => (
                            <div key={blog._id} >
                                <BlogItem blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


export default BlogPosts;


