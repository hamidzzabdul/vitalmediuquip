import SingleBlogEdit from '../../Components/Admin panel/features/SingleBlogEdit'
import { useLoaderData } from 'react-router-dom'

const EditProductPage = () => {
    const data = useLoaderData()
    return (
        <SingleBlogEdit method="patch" blog={data} />
    )
}

export default EditProductPage