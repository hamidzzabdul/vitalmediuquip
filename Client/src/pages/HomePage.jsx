import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import Category from '../Components/Homepage/Category'
import Faq from '../Components/Homepage/Faq'
import Hero from '../Components/Homepage/Hero'
import Partners from '../Components/Homepage/Partners'
// import Trending from '../Components/Homepage/Trending'
import Lab from '../Components/Homepage/Lab'
import General from '../Components/Homepage/General'
import Dirui from '../Components/Homepage/Dirui'
import Blogs from '../Components/Homepage/Blogs'
import Progress from '../Components/Homepage/Progress'

const HomePage = () => {
    const { data: blogs } = useRouteLoaderData("blogs-loader")
    const data = useLoaderData()
    const { products, categories, subCategories } = data.data
    return (
        <>
            <Hero />
            <Category />
            <Dirui products={products} subCategories={subCategories} categories={categories} />
            <Lab products={products} subCategories={subCategories} categories={categories} />
            <General products={products} subCategories={subCategories} categories={categories} />
            <Partners />
            <Blogs blogs={blogs} />
            <Faq />
            <Progress />
        </>
    )
}

export default HomePage
