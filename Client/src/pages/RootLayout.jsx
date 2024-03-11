import { useEffect, useState } from 'react'
import { Outlet, json, useNavigation } from "react-router-dom"

import ScaleLoader from "react-spinners/ScaleLoader";
import Navigation from "../Components/Common/Navigation"
import Footer from "../Components/Homepage/Footer"
import GetQuote from "../Components/Common/GetQuote"
import Whatsapp from '../Components/UI/Whatsapp';


const RootLayout = () => {
    const navigation = useNavigation()
    let [loading, setLoading] = useState(false)
    const [formIsShown, setFormIsShown] = useState(false)
    const [ShowSideMenu, setShowSideMenu] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        return () => clearTimeout()
    }, [loading])
    const showFormHandler = () => {
        setFormIsShown(formIsShown => !formIsShown)
    }
    const closeFormHandler = () => {
        setFormIsShown(formIsShown => formIsShown !== true)
    }
    const handleShowSideMenu = () => {
        setShowSideMenu(ShowSideMenu || true)
    }
    const handleCloseSideMenu = () => {
        setShowSideMenu(false)
    }
    return (
        <>
            <Navigation onShowForm={showFormHandler} onShowSide={handleShowSideMenu} onCloseSide={handleCloseSideMenu} />
            {formIsShown && <GetQuote onClose={closeFormHandler} />}
            <main>
                <Whatsapp />
                {navigation.state === "loading" &&
                    <ScaleLoader
                        className="loader"
                        color={"#1d9b47"}
                        loading={loading}
                        size={800}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                }
                {navigation.state === 'idle' && <Outlet />}
            </main>
            <Footer />
        </>
    )
}

export default RootLayout

export const loader = async () => {
    const data = await fetch(`${import.meta.env.VITE_API_URL}blogs`)
    // const data = await fetch("https://awful-erin-bandanna.cyclic.app/api/v1/products")
    if (!data.ok) {
        throw json({ message: "Something happened! reload the page or go back to the homepage" }, { status: 500 })
    } else {
        const res = await data.json()
        const newRes = res.data.data
        return { data: newRes }
    }

}