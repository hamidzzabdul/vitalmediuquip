import { json, useRouteLoaderData } from 'react-router-dom'
import Blog from '../Components/Blogpage/Blog'

const BlogPage = () => {
    const { data } = useRouteLoaderData("blogs-loader")
    return (
        <Blog blogs={data} />
    )
}

export default BlogPage

export const loader = async () => {
    const data = await fetch(`${import.meta.env.VITE_API_URL}blogs`)
    if (!data.ok) {
        throw json({ message: "Something happened! reload the page or go back to the homepage" }, { status: 500 })
    } else {
        const res = await data.json()
        const newRes = res.data.data
        return { data: newRes }
    }
}