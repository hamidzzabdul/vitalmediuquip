/* eslint-disable react/prop-types */
import { scrolltoTopHandler } from "../../../utils/scrolltotopHandler";
import { truncateText } from "../../../utils/truncate"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import "./BlogItem.scss"
import DOMPurify from "dompurify";
import { FaCalendarDays } from "react-icons/fa6";
import { imgUrl } from "../../../utils/imgUrl";


const BlogItem = ({ blog }) => {
    const { title, content, coverImage, createdAt } = blog;
    const sanitizedContent = DOMPurify.sanitize(content);
    const formattedCreatedAt = new Date(createdAt).toLocaleDateString();

    return (
        <div className="blog-post" >
            <NavLink to={`/blogs/${blog.slug}`} onClick={() => scrolltoTopHandler()}>
                <div className="blog-img">
                    <img src={`${imgUrl}/${coverImage}`} alt="" />
                </div>
                <div className="blog-details">
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: truncateText(sanitizedContent.toString(), 100) }} />
                </div>
                <div className="btn-container" >
                    <NavLink className="read-more" to={`/blogs/${blog.slug}`}>Read-more</NavLink>
                    <div className="date">
                        <FaCalendarDays />
                        <span>{formattedCreatedAt}</span>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

BlogItem.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default BlogItem