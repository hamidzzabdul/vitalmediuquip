import { Link } from "react-router-dom"

import "./BusinessHours.scss"
import { BsFillCalendar2EventFill } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa6"

const BusinessHours = () => {
    return (
        <div className="working-hours">
            <div className="title">
                <BsFillCalendar2EventFill className="bs-icons" />
                <h2>Business Hours</h2>
            </div>
            <div className="hours-wrapper">

                <div className="hours">
                    <p>Monday - Friday : 8:00 AM - 5:00 PM</p>
                    <p>Saturday : 9:00 AM - 3:00 PM</p>
                    <p>Sunday : Closed</p>
                </div>
                <div className="social">
                    <h3>Follow us</h3>
                    <label>

                        <Link to="https://www.facebook.com/VitalMediquip/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="social-icon" />
                        </Link >
                        <Link to="https://www.instagram.com/vital_mediquip/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </Link>
                        <Link to="https://www.linkedin.com/company/vital-mediquip/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="social-icon" />
                        </Link>
                        <Link to="https://twitter.com/Vital_Mediquip" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </Link>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default BusinessHours