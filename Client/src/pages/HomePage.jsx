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
import Dental from '../Components/Homepage/Dental'
import EnquireContext from '../store/EnquireContext'
import { useContext } from 'react'
import EnquireForm from '../Components/Common/EnquireForm'

const HomePage = () => {
    const { data: blogs } = useRouteLoaderData("blogs-loader")
    const data = useLoaderData()
    const { products, categories, subCategories } = data.data

    const { showEnquire, openEnquireModal, closeModal } = useContext(EnquireContext);
    return (
        <>
            {showEnquire && <EnquireForm onEnquire={openEnquireModal} onClose={closeModal} />}
            <Hero />
            <Category />
            <Dirui products={products} subCategories={subCategories} categories={categories} />
            <Lab products={products} subCategories={subCategories} categories={categories} />
            <General products={products} subCategories={subCategories} categories={categories} />
            <Dental products={products} subCategories={subCategories} categories={categories} />
            <Partners />
            <Blogs blogs={blogs} />
            <Faq />
            <Progress />
        </>
    )
}

export default HomePage
