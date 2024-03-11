import "./Footer.scss"

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom"
import Logo from "../../../public/logo.svg"
import DiruiLogo from "../../assets/DiruiLogo.png"
import { Categories, otherCategories } from "../../../utils/data";


const Footer = () => {

    const handleOnclick = () => {
        window.scrollTo({
            top: -100,
            behavior: "smooth"
        })
    }
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-section logo">
                        <NavLink to="/" onClick={handleOnclick}>
                            <img src={Logo} alt="" />
                        </NavLink>
                        <p>Premier medical supplier for top-quality healthcare solutions.</p>
                        <p>Exlusive Distributor of dirui products</p>
                        <img src={DiruiLogo} alt="" className="dirui" />
                    </div>
                    <div className="footer-section links">
                        <div className="links-wrapper">
                            <div className="links-container">
                                <ul>
                                    <h3>Categories</h3>
                                    {Categories.map(category => (
                                        <li key={category.name}>
                                            <NavLink to={category.link}>{category.name}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    <h3>Other Industruies</h3>
                                    {otherCategories.map(category => (
                                        <li key={category.name}>
                                            <NavLink to={category.link}>{category.name}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section contacts">
                        <div className="wrapper">
                            <div className="links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <NavLink to="/About">About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/allProducts" onClick={handleOnclick}>
                                            Products
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact-us" onClick={handleOnclick}>
                                            Contacts
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/faqs" onClick={handleOnclick}>
                                            FAQ
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact-wrapper">
                                <h3>Contact Us</h3>
                                <div className="contact-phone">
                                    <h4>Phone</h4>
                                    <p>+254 705 562383</p>
                                </div>
                                <div className="contact-phone">
                                    <h4>Email</h4>
                                    <p>Support@Vitalmediquip.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-icons">
                            <h3>Get in touch</h3>
                            <ul>
                                <li>
                                    <Link to="https://www.facebook.com/VitalMediquip/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookSquare className="social-icon" />
                                    </Link >
                                </li>
                                <li>
                                    <Link to="https://twitter.com/Vital_Mediquip" target="_blank" rel="noopener noreferrer">
                                        <FaSquareXTwitter className="social-icon" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/vital_mediquip/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="social-icon" />

                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/vital-mediquip/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="social-icon" />
                                    </Link>
                                </li>


                            </ul>
                        </div>
                    </div>

                </div>
            </footer >
            <div className="copyrights">
                <p>Copyright © 2023 Vitalmediquip</p>
                <p>All right Reservered Vitalmediquip</p>
            </div>
        </>
    )
}

export default Footer