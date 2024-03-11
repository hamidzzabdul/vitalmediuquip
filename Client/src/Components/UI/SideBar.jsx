/* eslint-disable react/prop-types */
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom"

import Logo from "../../../public/logo.svg"
import { GrFormClose } from "react-icons/gr"
import { BsFacebook } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa6"
import { BsLinkedin } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import "./Sidebar.scss"





const Backdrop = ({ onClose }) => {
    return <div className="backdrop-side" onClick={onClose}></div>;
};

const portalElement = document.getElementById("overlays");

const SideBar = ({ className, onClose, onShow }) => {

    return (
        <Fragment>

            {className &&
                ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            <div
                className={`sidebar ${className === "active" ? "active" : ""}`} >
                <div className="logo">
                    <div className="image">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="close-icon" onClick={onClose}>
                        <GrFormClose className="icon" />
                    </div>
                </div>
                <ul className="side-items">
                    <NavLink to="/about" onClick={onClose}>
                        <li>
                            About
                        </li>
                    </NavLink>
                    <NavLink to="/allProducts" onClick={onClose}>
                        <li>
                            Products

                        </li>
                    </NavLink>
                    <NavLink to="/Faqs" onClick={onClose}>
                        <li>
                            Faqs

                        </li>
                    </NavLink>
                    <NavLink to="/contact-us" onClick={onClose}>
                        <li>
                            Contact us
                        </li>
                    </NavLink>
                </ul>
                <div className="get-container">
                    <div className="socials">
                        <a href="https://www.facebook.com/VitalMediquip/" target="_blank" rel="noopener noreferrer"><BsFacebook className='icons' /></a>
                        <a href="https://www.instagram.com/vital_mediquip/" target="_blank" rel="noopener noreferrer"><FaInstagram className='icons' /></a>
                        <a href="https://www.linkedin.com/company/vital-mediquip/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='icons' /></a>
                        <a href="https://twitter.com/Vital_Mediquip" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle className='icons' /></a>
                    </div>

                    <button className="get-btn" onClick={onShow}>
                        <NavLink>
                            Get Quote
                        </NavLink>
                    </button>
                </div>
            </div>
        </Fragment >
    )
}

export default SideBar