
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import Button from "../UI/Button"


import { HiOutlineBars3BottomRight } from "react-icons/hi2"
import { BiShoppingBag } from "react-icons/bi";

import Logo from "../../../public/logo.svg"


import "./Navigation.scss"
import { useEffect, useState } from "react"
import NavDetails from "./NavDetails"
import SideBar from "../UI/SideBar"
import Wishlist from "./Wishlist";
import { useSelector } from "react-redux";

import { scrolltoTopHandler } from "../../../utils/scrolltotopHandler";

const Navigation = ({ onShowForm }) => {

    const [isNavDetailsVisible, setIsNavDetailsVisible] = useState(true);


    const [isActive, setIsActive] = useState(false);
    const [isWishlistActive, setIsWishlistActive] = useState(false);
    const [isCartAnimation, setIsCartAnimation] = useState(false); // Step 2

    const toggleSideBar = () => {
        setIsActive(!isActive);
    };
    const toggleWishlist = () => {
        setIsWishlistActive(!isWishlistActive);
    };
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const shouldHideNavDetails = scrollPosition > 5 * 16; // 5rem in pixels
        setIsNavDetailsVisible(!shouldHideNavDetails);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const wishListItems = useSelector((state) => state.wishlist.items)

    useEffect(() => {
        // Step 4: Trigger the animation and reset the state after a short delay
        if (wishListItems.length > 0) {
            setIsCartAnimation(true);
            const timeout = setTimeout(() => {
                setIsCartAnimation(false);
            }, 1000); // You can adjust the duration as needed
            return () => clearTimeout(timeout);
        }
    }, [wishListItems]);

    return (
        <>
            <SideBar className={isActive ? "active" : ""} onClose={toggleSideBar} onShow={onShowForm} />
            <Wishlist className={isWishlistActive ? "active" : ""} onClose={toggleWishlist} />

            <div className="nav-wrapper">
                <div className={`secondary-nav-wrapper ${isNavDetailsVisible ? "" : "hide-nav-details"}`}>
                    <NavDetails />
                </div>

                <nav className={!isNavDetailsVisible ? "primary-nav-wrapper" : ""}>
                    <div className={`nav-bar ${isNavDetailsVisible ? "" : "primary-nav"}`}>
                        <div></div>
                        <NavLink to="/" className="logo">
                            <img src={Logo} alt="" />
                        </NavLink>
                        <div className="nav-links">

                            <ul className="nav-items">
                                <li><NavLink to="/" className={({ isActive }) =>
                                    isActive ? "active" : undefined
                                } onClick={scrolltoTopHandler}>Home</NavLink></li>
                                <li><NavLink to="/allProducts" onClick={scrolltoTopHandler}>Products</NavLink></li>
                                <li><NavLink to="/about" onClick={scrolltoTopHandler}>About Us</NavLink></li>
                                <li><NavLink to="/faqs" onClick={scrolltoTopHandler}>FAQS</NavLink></li>
                                <li><NavLink to="/blogs" onClick={scrolltoTopHandler}>Blogs</NavLink></li>
                                <li><NavLink to="/contact-us" onClick={scrolltoTopHandler}>Contact us</NavLink></li>
                            </ul>
                            <div className="cart">
                                <Button label="Get Quote" className="get-quote" onClick={onShowForm} />
                                <div className="cart-icon" onClick={toggleWishlist}>
                                    <BiShoppingBag className={`icon ${isCartAnimation ? 'animate' : ''}`} />
                                    <div className="cart-count">
                                        <span>{wishListItems.length || 0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bars">
                                <HiOutlineBars3BottomRight className="hamburger" onClick={toggleSideBar} />
                            </div>
                        </div>
                    </div>
                </nav>
            </ div>
        </>
    )
}

Navigation.propTypes = {
    onShowForm: PropTypes.func,
};

export default Navigation