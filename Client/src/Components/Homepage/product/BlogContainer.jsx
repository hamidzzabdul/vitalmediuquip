/* eslint-disable react/prop-types */
import "./BlogContainer.scss"
import { FaCalendarDays } from "react-icons/fa6";
import { formatDate } from "../../../../utils/formatDate";
import { NavLink } from "react-router-dom";
import { imgUrl } from "../../../../utils/imgUrl";
import { truncateText } from "../../../../utils/truncate";
const BlogContainer = ({ blog }) => {
    return (
        <div className="blog-card">
            <div className="img-container">
                <img src={`${imgUrl}/blogs/${blog.coverImage}`} alt={blog.title} />
            </div>

            <div className="content-wrapper">
                <h2 className="title">{blog.title}</h2>
                <p>{truncateText(blog.description, 70)}</p>
                <div className="btn-container">
                    <NavLink to={"/blogs/" + blog.slug}>
                        Read more
                    </NavLink>
                    <div className="date">
                        <FaCalendarDays className="icon" />
                        <p>{formatDate(blog.createdAt)}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default BlogContainer