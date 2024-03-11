import { useParams, useRouteLoaderData } from "react-router-dom";
import "./SinglePostPage.scss"
import { BiCalendar } from "react-icons/bi";

import { formatDate } from "../../../utils/formatDate";
import { imgUrl } from "../../../utils/imgUrl";

const SinglePostPage = () => {
    const { data: blogs } = useRouteLoaderData("blogs");
    const { id: slug } = useParams()

    const blog = blogs.filter(blog => blog.slug === slug)

    return (
        <div className="post-container">
            <div className="post-content">
                <div className="header">
                    <h1 className="title">{blog[0].title}</h1>

                    <div className="date-container">
                        <BiCalendar />
                        <p>{formatDate(blog[0].createdAt)}</p>
                    </div>
                </div>
                <div className="cover-image">
                    <img src={`${imgUrl}/${blog[0].coverImage}`} alt="" />
                </div>

                <div className="content">
                    <div className="content-text">
                        <div dangerouslySetInnerHTML={{ __html: blog[0].content }} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SinglePostPage