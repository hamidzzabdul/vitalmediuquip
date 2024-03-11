import SingleProductEdit from '../../Components/Admin panel/features/SingleProductEdit'
import { useRouteLoaderData } from 'react-router-dom'

const EditProductPage = () => {
    const data = useRouteLoaderData("product-loader")
    return (
        <SingleProductEdit method="patch" product={data} />
    )
}

export default EditProductPage